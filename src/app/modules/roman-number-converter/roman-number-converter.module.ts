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

import { RomanToArabicComponent } from './roman-to-arabic/roman-to-arabic.component';
import { ArabicToRomanComponent } from './arabic-to-roman/arabic-to-roman.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RomanToArabicComponent,
    ArabicToRomanComponent
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
    RomanToArabicComponent,
    ArabicToRomanComponent
  ],
  exports: [
    RomanToArabicComponent,
    ArabicToRomanComponent
  ]
})
export class RomanNumberConverterModule { }
