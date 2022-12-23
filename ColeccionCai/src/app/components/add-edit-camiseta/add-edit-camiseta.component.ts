import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Camiseta } from 'src/app/models/Camiseta';
import { CamisetaService } from 'src/app/services/camiseta.service';

@Component({
  selector: 'app-add-edit-camiseta',
  templateUrl: './add-edit-camiseta.component.html',
  styleUrls: ['./add-edit-camiseta.component.scss'],
})
export class AddEditCamisetaComponent implements OnInit {
  camiseta!: Camiseta;
  camisetaForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private camisetaService: CamisetaService
  ) {
    this.camiseta = data.camiseta;
  }

  ngOnInit(): void {
    this.camisetaForm = new FormGroup({
      descripcion: new FormControl(''),
      fotoUrl: new FormControl(''),
      laTengo: new FormControl(''),
      precio: new FormControl(0),
    });

    this.mapearCamiseta();
  }

  mapearCamiseta() {
    this.camisetaForm.get('descripcion')?.setValue(this.camiseta.descripcion);
    this.camisetaForm.get('fotoUrl')?.setValue(this.camiseta.fotoUrl);
    this.camisetaForm.get('laTengo')?.setValue(this.camiseta.laTengo);
    this.camisetaForm.get('precio')?.setValue(this.camiseta.precio);
  }

  subirForm() {
    this.camiseta.descripcion = this.camisetaForm.get('descripcion')?.value;
    this.camiseta.fotoUrl = this.camisetaForm.get('fotoUrl')?.value;
    this.camiseta.laTengo = this.camisetaForm.get('laTengo')?.value;
    this.camiseta.precio = this.camisetaForm.get('precio')?.value;

    this.camisetaService
      .updateCamiseta(this.camiseta.id, this.camiseta)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log('catch', e);
      });
  }

  async eliminarItem(){
    console.log(this.camiseta)
    const response = await this.camisetaService.delete(this.camiseta);
    console.log(response)
  }
}
