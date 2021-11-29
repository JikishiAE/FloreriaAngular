import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productos: any;

  constructor(private APIService:APIService) { }

  ngOnInit(): void {
    this.APIService.getProducs().subscribe(resp=>{
      this.productos = resp;
      console.log(resp);
      
    })
  }

}
