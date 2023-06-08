import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
// import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from "@angular/material/dialog";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumberConverterComponent } from './number-converter/number-converter.component';

@NgModule({
  declarations: [
    NumberConverterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
  ],
  bootstrap: [
    NumberConverterComponent
  ],
  exports: [
    NumberConverterComponent
  ]
})
export class RomanNumberConverterModule { }
