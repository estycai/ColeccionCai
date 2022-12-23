import { Component, OnInit } from '@angular/core';
import {
  NgbProgressbarConfig,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Camiseta } from 'src/app/models/Camiseta';
import { CamisetaService } from 'src/app/services/camiseta.service';
import * as _ from 'lodash';
class Estadisticas {
  tengo: number = 0;
  total: number = 0;
  porcentaje: number = 0;
}
@Component({
  selector: 'app-data-dashboard',
  templateUrl: './data-dashboard.component.html',
  styleUrls: ['./data-dashboard.component.scss'],
})
export class DataDashboardComponent implements OnInit {
  _: any;
  camisetas: Camiseta[] = [];
  estadisticasTotal: Estadisticas = new Estadisticas;
  estadisticasTitulares: Estadisticas = new Estadisticas;
  estadisticasSuplentes: Estadisticas = new Estadisticas;
  estadisticasELimitadas: Estadisticas = new Estadisticas;
  totalGastado: number = 0;

  constructor(
    config: NgbProgressbarConfig,
    private camisetaService: CamisetaService
  ) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.showValue = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe((data) => {
      this.camisetas = data;
      console.log(this.camisetas)
	  this.estadisticasTotal= this.calcularTotalQueTengo(this.camisetas);
	  this.estadisticasTitulares= this.calcularTotalTitulares();
	  this.estadisticasSuplentes =this.calcularTotalSuplente();
	  this.estadisticasELimitadas = this.calcularTotalLimitadas()
	  this.totalGastado = this.camisetas.reduce((acumulador, actual) => acumulador + (actual.precio * 1), 0);
      
    });
  }


  calcularTotalTitulares() {
	const result = this.camisetas.filter(x => x.tipo == 1);	
	return this.calcularTotalQueTengo(result);
  }
  calcularTotalSuplente() {
	const result = this.camisetas.filter(x => x.tipo == 2);	
	return this.calcularTotalQueTengo(result);
  }
  calcularTotalLimitadas() {
	const result = this.camisetas.filter(x => x.tipo == 3);	
	return this.calcularTotalQueTengo(result);
  }

  calcularTotalQueTengo(camisetas : Camiseta[]) : Estadisticas{
	let estadisticas: Estadisticas = new Estadisticas();

	
	const total= camisetas.length;
	estadisticas.total = total;

	const tengo= camisetas.filter(x => x.laTengo).length;
	estadisticas.tengo = tengo;

	estadisticas.porcentaje = ((tengo * 100) / total)

	return estadisticas;
  }
  
}

