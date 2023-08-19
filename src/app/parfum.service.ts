import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options, Product, Shop} from './entities';



@Injectable({
  providedIn: 'root'
})
export class ParfumService {
  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<Product[]>('http://localhost:8000/api/product')
  }// recevoir tt les produits

  add(product: Product) {
    return this.http.post<Product>('http://localhost:8000/api/product', product)

  }

  delete(id: number) {
    return this.http.delete<void>('http://localhost:8000/api/product/' + id)
  }

  fetchOne(id: any) {
    return this.http.get<Product>('http://localhost:8000/api/product/' + id)
  }

  update(product: Product) {
    return this.http.patch<Product>('http://localhost:8000/api/product/' + product.id, product)

  }
  findByProduct(id: any) {
    return this.http.get<Options[]>('http://localhost:8000/api/options/product/' + id)
  }
  findByShop(id: any) {
    return this.http.get<Product[]>('http://localhost:8000/api/shop/' + id + '/product')
  }
  fetchAllShop() {
    return this.http.get<Shop[]>('http://localhost:8000/api/shop')
  }

  search(term: string) {
    return this.http.get<Product[]>('http://localhost:8000/api/product/search/' + term)

  }

}
