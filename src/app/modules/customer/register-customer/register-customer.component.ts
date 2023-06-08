import { Component } from '@angular/core';
import {Customer} from "../../../shared/model/restaurant/Customer";
import {RestaurantService} from "../../../shared/services/restaurant.service";

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent {

  customer: Customer
  restaurantService: RestaurantService

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
    this.customer = new Customer()
  }

  public addCustomer() {
    this.restaurantService.addCustomer(this.customer)
  }
}
