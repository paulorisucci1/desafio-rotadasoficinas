import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  declarations: [
    ListOrderComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  exports: [
    ListOrderComponent,
    CreateOrderComponent
  ],
  bootstrap: [
    ListOrderComponent,
    CreateOrderComponent
  ]
})
export class OrderModule { }
