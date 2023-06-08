import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../shared/services/restaurant.service";
import {Customer} from "../../../shared/model/restaurant/Customer";
import {Product} from "../../../shared/model/restaurant/Product";
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  private restaurantService: RestaurantService

  private route: ActivatedRoute

  products: Array<Product>

  customer: Customer

  checkboxes: { [key: string]: FormControl } = {};

  constructor(route: ActivatedRoute, restaurantService: RestaurantService) {
    this.route = route
    this.restaurantService = restaurantService
    this.customer = new Customer()
    this.products = restaurantService.listProducts()
    this.products.forEach((product) => {
      this.checkboxes[product.name!] = new FormControl(false)
    })
  }

  public ngOnInit() {
    this.route.params.subscribe(
      params => {
        const name = params['name']
        this.customer = this.restaurantService.findCustomerByName(name)!
      }
    )
  }

  public makeOrder() {
    const selectedItems = this.getSelectedItems()
    this.restaurantService.makeOrder(this.customer, selectedItems)
  }

  private getSelectedItems() {
    const selectedItems = []
    for (const name in this.checkboxes) {
      if(this.checkboxes[name].value) {
        const selectedItem = this.restaurantService.findProductByName(name)
        if(selectedItem) {
          selectedItems.push(selectedItem)
        }
      }
    }
    return selectedItems
  }

}
