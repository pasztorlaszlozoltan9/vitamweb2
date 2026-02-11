import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    protected readonly http = inject(HttpClient)
    private readonly url = 'http://localhost:8000/api/products'
    getProducts() {
      return this.http.get(this.url);
    }
}
