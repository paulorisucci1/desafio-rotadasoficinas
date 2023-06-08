import { Injectable } from '@angular/core';
import {Restaurant} from "../model/restaurant/Restaurant";
import {Customer} from "../model/restaurant/Customer";
import {Product} from "../model/restaurant/Product";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurant: Restaurant

  constructor() {
    this.restaurant = new Restaurant('Siri Cascudo')
  }

  public addCustomer(customer: Customer) {
    this.restaurant.addCustomer(customer)
  }

  public addProduct(product: Product) {
    this.restaurant.addProduct(product)
  }

  public listCustomers() {
    return this.restaurant.customers
  }

  public listProducts() {
    return this.restaurant.products
  }
}
