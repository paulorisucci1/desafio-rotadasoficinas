import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGameComponent } from './modules/game-of-life/play-game/play-game.component';
import { RestaurantComponent } from './modules/restaurant/restaurant/restaurant.component';
import { ArabicToRomanComponent } from './modules/roman-number-converter/arabic-to-roman/arabic-to-roman.component';
import { RomanToArabicComponent } from './modules/roman-number-converter/roman-to-arabic/roman-to-arabic.component';

const routes: Routes = [
  {
    path: 'arabictoromanconverter',
    component: ArabicToRomanComponent
  },
  {
    path: 'romantoarabicconverter',
    component: RomanToArabicComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'playgameoflife',
    component: PlayGameComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
