import { Component, inject } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  protected readonly api = inject(ProductService)
  protected readonly builder = inject(FormBuilder)

  protected products: any;
  protected showModal = false;

  protected productForm = this.builder.group({
    name: [''],
    form: ['']
  })

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.api.getProducts().subscribe({
      next: (result: any) => {
        console.log(result)
        this.products = result.data
      },
      error: (err: any) => {}
    })
  }

  startShowModal() {
    this.showModal = true
  }

  startCloseModal() {
    this.showModal = false
  }

  startSave()  {
    console.log('Mentés ...')
    console.log(this.productForm.value)
    this.api.addProduct(this.productForm.value).subscribe({
      next: (result: any) => {
        console.log(result)
        this.showModal = false
        this.getProducts()
      },
      error: (err: any) => {}
    })
  }
  
}
