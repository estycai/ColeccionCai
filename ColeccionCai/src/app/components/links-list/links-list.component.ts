import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faFacebook  } from "@fortawesome/free-brands-svg-icons";
import { faTrash, faPlus, faTshirt} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'src/app/models/Link';
import { LinksServiceService } from 'src/app/services/links-service.service';


@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {
  faTrash = faTrash;
  faPlus = faPlus;
  faTshirt = faTshirt;

  idCamiseta: string;

  formLinkAdd!: FormGroup;
  links: Link[] = [];
  link: Link = new Link;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private linkService: LinksServiceService
  ) { 
    this.link = data;
    this.idCamiseta= data.camiseta.id;
  }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe( data =>{
      this.links = data.filter(x => {return x.camiseta_id.toString() === this.idCamiseta.toString()});
    });

 


    this.formLinkAdd = new FormGroup({
      link: new FormControl(''),
      precio: new FormControl(0),
      camiseta_id:new FormControl('')
    })
  }

  async addLink(){
    this.formLinkAdd.get("camiseta_id")?.setValue(this.idCamiseta);
    const response = await this.linkService.addLink(this.formLinkAdd.value);

    console.log(response)
  }

  async eliminarLink(link:Link){
    const response = await this.linkService.delete(link);
    console.log(response)
  }

}
