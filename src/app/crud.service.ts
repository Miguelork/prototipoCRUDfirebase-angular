import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../../src/app/producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>;
  private productos: Observable<Producto[]>;
  private productoDoc: AngularFirestoreDocument<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosCollection = db.collection<Producto>('productos');
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  listProducto(){
    return this.productos;
  }
  agregarProducto(producto: Producto){
    this.productosCollection.add(producto);
  }
  eliminarProducto(producto){
    this.productoDoc = this.db.doc<Producto>(`productos/${producto.id}`);
    this.productoDoc.delete();
  }
  editarProducto(producto){
    this.productoDoc = this.db.doc<Producto>(`productos/${producto.id}`);
    this.productoDoc.update(producto);
  }
}
