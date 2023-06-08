import { GameOfLife } from "../model/game-of-life/GameOfLife";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  private gameOfLife: GameOfLife

  constructor() {
    this.gameOfLife = this.getNewGame()
  }

  public getGrid(): boolean[][] {
    return this.gameOfLife.getGrid()
  }

  public resetGame(): void {
    this.gameOfLife = this.getNewGame()
  }

  public getNextGeneration(): boolean[][] {
    this.gameOfLife.nextGeneration()
    return this.gameOfLife.getGrid()
  }

  private getNewGame(): GameOfLife {
    let gameOfLife = new GameOfLife(10, 10)
    gameOfLife.randomize()
    return gameOfLife
  }
}
