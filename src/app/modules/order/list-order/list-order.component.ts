import { Component } from '@angular/core';
import {RestaurantService} from "../../../shared/services/restaurant.service";
import {Customer} from "../../../shared/model/restaurant/Customer";

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent {

  private restaurantService: RestaurantService
  customers: Array<Customer>

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
    this.customers = restaurantService.listCustomers()
  }

  public getBill(customer: Customer) {
    return this.restaurantService.getBill(customer)
  }
}
