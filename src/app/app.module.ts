import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RomanNumberConverterModule} from "./modules/roman-number-converter/roman-number-converter.module";
import {GameOfLifeModule} from "./modules/game-of-life/game-of-life.module";
import {CustomerModule} from "./modules/customer/customer.module";
import {ProductModule} from "./modules/product/product.module";
import {OrderModule} from "./modules/order/order.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    LayoutModule,
    RomanNumberConverterModule,
    GameOfLifeModule,
    CustomerModule,
    ProductModule,
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
