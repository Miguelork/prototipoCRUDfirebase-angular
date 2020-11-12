import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  producto:Producto={
    nombre:'',
    categoria:'',
    precio:0,
    stock:0,
    fabricante:''
  }

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
  }
  
  agregar(){
    this.crud.agregarProducto(this.producto);
    this.producto.nombre ='';
    this.producto.categoria ='';
    this.producto.precio =0;
    this.producto.stock =0;
    this.producto.fabricante ='';
  }

}
