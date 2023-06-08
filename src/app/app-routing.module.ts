import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGameComponent } from './modules/game-of-life/play-game/play-game.component';
import {NumberConverterComponent} from "./modules/roman-number-converter/number-converter/number-converter.component";
import {RegisterCustomerComponent} from "./modules/customer/register-customer/register-customer.component";
import {ListCustomersComponent} from "./modules/customer/list-customer/list-customers.component";
import {ListProductsComponent} from "./modules/product/list-product/list-products.component";
import {RegisterProductComponent} from "./modules/product/register-product/register-product.component";
import {ListOrderComponent} from "./modules/order/list-order/list-order.component";
import {CreateOrderComponent} from "./modules/order/create-order/create-order.component";

const routes: Routes = [
  {
    path: 'numberconverter',
    component: NumberConverterComponent
  },
  {
    path: 'playgameoflife',
    component: PlayGameComponent
  },
  {
    path: 'registercustomer',
    component: RegisterCustomerComponent
  },
  {
    path: 'listcustomers',
    component: ListCustomersComponent
  },
  {
    path: 'registerproduct',
    component: RegisterProductComponent
  },
  {
    path: 'listproducts',
    component: ListProductsComponent
  },
  {
    path: 'listorders',
    component: ListOrderComponent
  },
  {
    path: 'listcustomers/:name/createorder',
    component: CreateOrderComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
