import { Component } from '@angular/core';
import {RestaurantService} from "../../../shared/services/restaurant.service";
import {Product} from "../../../shared/model/restaurant/Product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  private restaurantService: RestaurantService
  public products: Array<Product>

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
    this.products = restaurantService.listProducts()
  }
}
