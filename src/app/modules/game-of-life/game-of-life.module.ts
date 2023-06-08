import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameComponent } from './play-game/play-game.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PlayGameComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  exports: [
    PlayGameComponent
  ],
  bootstrap: [
    PlayGameComponent
  ]
})
export class GameOfLifeModule { }
