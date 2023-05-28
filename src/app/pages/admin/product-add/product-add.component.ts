import { Component } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {


  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })

  constructor(private formBuilder: FormBuilder, private productService: ProductService){

  }

  onHandleSubmit(){
    if(this.productForm.invalid){
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }
    this.productService.addProduct(product).subscribe(data => {
      console.log(data);
    })
  }
}
