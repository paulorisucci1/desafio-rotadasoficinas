import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ListCustomersComponent } from './list-customer/list-customers.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    RegisterCustomerComponent,
    ListCustomersComponent
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
  ],
  exports: [
    ListCustomersComponent,
    RegisterCustomerComponent
  ],
  bootstrap: [ListCustomersComponent, RegisterCustomerComponent]
})
export class CustomerModule { }
