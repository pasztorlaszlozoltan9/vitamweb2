import { Component, inject } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  protected readonly api = inject(ProductService)

  protected products: any;

  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.api.getProducts().subscribe({
      next: (result: any) => {
        console.log(result)
        this.products = result.data
      },
      error: (err: any) => {}
    })
  }
}
