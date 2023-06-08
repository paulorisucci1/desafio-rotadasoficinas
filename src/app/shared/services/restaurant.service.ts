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

  public findProductByName(name: string) {
    return this.restaurant.products.find(product => product.name === name)
  }

  public findCustomerByName(name: string) {
    return this.restaurant.customers.find(customer => customer.name === name)
  }

  public makeOrder(customer: Customer, products: Array<Product>) {
    customer.addProducts(products)
    products.forEach(product => product.addCustomer(customer))
  }

  public getBill(customer: Customer) {
    return this.restaurant.getCustomerBill(customer)
  }
}
