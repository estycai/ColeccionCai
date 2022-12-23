import { Component, Input, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/models/Camiseta';
import { TIPOCAMISETA } from 'src/app/constants/tipoCamiseta';
import { AddEditCamisetaComponent } from '../../add-edit-camiseta/add-edit-camiseta.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-camiseta-info',
  templateUrl: './camiseta-info.component.html',
  styleUrls: ['./camiseta-info.component.scss'],
})
export class CamisetaInfoComponent implements OnInit {
  @Input() camiseta!: Camiseta;
  tipoString: string = 'Titular';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    switch (this.camiseta.tipo) {
      case TIPOCAMISETA.TITULAR:
        this.tipoString = 'Titular';
        break;
      case TIPOCAMISETA.SUPLENTE:
        this.tipoString = 'Suplente';
        break;
      case TIPOCAMISETA.EDICION_ESPECIAL:
        this.tipoString = 'Edicion Especial';
        break;
    }
  }

  openDialog(camiseta: any) {
    console.log(camiseta)
    this.dialog.open(AddEditCamisetaComponent, {
      height: 'auto',
      data: {
        camiseta: camiseta
      },
    });
  }
}
