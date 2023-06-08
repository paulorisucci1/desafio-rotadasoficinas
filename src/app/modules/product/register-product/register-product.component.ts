import { Component } from '@angular/core';
import {RestaurantService} from "../../../shared/services/restaurant.service";
import {Product} from "../../../shared/model/restaurant/Product";

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {


  product: Product
  restaurantService: RestaurantService

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
    this.product = new Product()
  }

  addProduct() {
    this.restaurantService.addProduct(this.product)
  }
}
