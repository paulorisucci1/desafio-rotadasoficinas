import {Component, OnInit} from '@angular/core';
import {GameOfLifeService} from "../../../shared/services/GameOfLifeService";

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  gameOfLifeService: GameOfLifeService
  gameGrid: boolean[][]

  constructor(gameOfLifeService: GameOfLifeService) {
    this.gameOfLifeService = gameOfLifeService
    this.gameGrid = gameOfLifeService.getGrid()
  }

  ngOnInit(): void {
  }

  nextGeneration() {
    this.gameGrid = this.gameOfLifeService.getNextGeneration()
  }

  reset() {
    this.gameOfLifeService.resetGame()
    this.gameGrid = this.gameOfLifeService.getGrid()
  }
}
