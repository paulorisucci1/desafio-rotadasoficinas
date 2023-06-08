import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../shared/services/restaurant.service";
import {Customer} from "../../../shared/model/restaurant/Customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent {

  private restaurantService: RestaurantService
  customers: Array<Customer>

  constructor(restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
    this.customers = restaurantService.listCustomers()
  }

}
