import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProdList():Observable<Product[]>{
    console.log("hello from service");

    return this.httpClient.get<Product[]>("http://localhost:3000/products");
    
  }

  deleteProd(Prod:Product):Observable<Product[]>{
    return this.httpClient.delete<Product[]>(`http://localhost:3000/Prod/${Prod.id}`)
  }

  getProdById(Prod:Product):Observable<Product>{
    return this.httpClient.get<Product>(`http://localhost:3000/Prod/${Prod.id}`)
  }
  updateProd(Prod:Product):Observable<Product>{
    return this.httpClient.put<Product>(`http://localhost:3000/Prod/${Prod.id}`,Prod)
  }
}