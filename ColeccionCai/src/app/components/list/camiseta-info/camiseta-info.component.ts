import { Component, Input, OnInit } from '@angular/core';
import { Camiseta } from 'src/app/models/Camiseta';

@Component({
  selector: 'app-camiseta-info',
  templateUrl: './camiseta-info.component.html',
  styleUrls: ['./camiseta-info.component.scss']
})
export class CamisetaInfoComponent implements OnInit {

  @Input() camiseta! :Camiseta;

  constructor() { }

  ngOnInit(): void {
  }

}
