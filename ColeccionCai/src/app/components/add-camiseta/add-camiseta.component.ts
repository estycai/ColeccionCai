import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TIPOCAMISETA } from 'src/app/constants/tipoCamiseta';
import { Camiseta } from 'src/app/models/Camiseta';
import { CamisetaService } from 'src/app/services/camiseta.service';

interface TipoCamisetas {
  value: number;
  descripcion: string;
}

@Component({
  selector: 'app-add-camiseta',
  templateUrl: './add-camiseta.component.html',
  styleUrls: ['./add-camiseta.component.scss']
})
export class AddCamisetaComponent implements OnInit {

  camiseta: Camiseta = new Camiseta();
  camisetaFormAdd!: FormGroup;

  tipoCamisetas: TipoCamisetas[] = [
    {value: TIPOCAMISETA.TITULAR, descripcion: 'Titular'},
    {value: TIPOCAMISETA.SUPLENTE, descripcion: 'Suplente'},
    {value: TIPOCAMISETA.EDICION_ESPECIAL, descripcion: 'Edicion Especial'},
  ];

  constructor(private camisetaService: CamisetaService, private router: Router) { }

  ngOnInit(): void {
    this.camisetaFormAdd = new FormGroup({ 
      anio: new FormControl(''),
      descripcion: new FormControl(''),
      fotoUrl: new FormControl(''),
      laTengo: new FormControl(false),
      precio: new FormControl(0),
      tipo: new FormControl(''),
    })

 
  }

  async subirForm(){
    const response = await this.camisetaService.addCamiseta(this.camisetaFormAdd.value);
    console.log(response)
  }

  redirect() {
    this.router.navigate(['./']);
  }
}
