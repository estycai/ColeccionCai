import { Component, Input, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/models/Camiseta';
import { CamisetaService } from 'src/app/services/camiseta.service';
import * as _ from 'lodash';
import { Temporada } from 'src/app/models/Temporada';
import { orderBy } from 'firebase/firestore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  _: any;
  camisetas: any;
  panelOpenState: boolean = false;
  
  constructor(private camisetaService: CamisetaService) { }

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe(data =>{
    
      let result= _.chain(data).groupBy("anio")
      .map((value, key) => ({ anio: key, camiseta: value }))
      .orderBy(['anio'], ['desc'])
      .value();

      // result.forEach(e => {
      //  _.chain(e.camiseta).groupBy("tipo")
      //   .map()
      //   .orderBy(['tipo'], ['desc'])
      //   .value();
        
      // });

      this.camisetas = result;

    })
  }

}
