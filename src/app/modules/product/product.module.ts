import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ListProductsComponent } from './list-product/list-products.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    RegisterProductComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
  ]
})
export class ProductModule { }
