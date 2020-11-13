import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  @Input() editProducto:Producto={
    nombre:'',
    categoria:'',
    precio:0,
    stock:0,
    fabricante:''
  }
  constructor(private crud: CrudService) { }

  ngOnInit(): void {
  }

  editar(producto){ 
    this.editProducto = producto;
  }
  aggProductEditado(){
    this.crud.editarProducto(this.editProducto);
  }

}
