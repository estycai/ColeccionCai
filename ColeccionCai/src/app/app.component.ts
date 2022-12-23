import { Component, OnInit } from '@angular/core';
import { Camiseta } from './models/Camiseta';
import debounce from 'lodash-es/debounce';
import * as _ from 'lodash';
import { CamisetaService } from './services/camiseta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ColeccionCai';

  _: any;


  constructor(private _service: CamisetaService) {
    // let result= _.chain(this.camisetas).groupBy("anio")
    //     .map((value, key) => ({ anio: key, camiseta: value }))
    //     .value();
  }

  async ngOnInit(): Promise<void> {
    // this._service.getCamisetas().subscribe( data => {
    //   console.log(data)
    // });
  }
}
