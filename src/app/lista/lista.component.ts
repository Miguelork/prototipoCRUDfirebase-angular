import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  productos:Producto[];
  product:Producto={
    nombre:'',
    categoria:'',
    precio:0,
    stock:0,
    fabricante:''
  }
  constructor(private crud: CrudService) {
    this.crud.listProducto().subscribe(prod=>{
      this.productos = prod;
      console.log(this.productos)
    })
  }

  ngOnInit(): void {
  }

  eliminar(producto){
    this.crud.eliminarProducto(producto);
  }

  almacenaProd(producto){
    this.product = producto;
    alert(this.product);
  }

}
