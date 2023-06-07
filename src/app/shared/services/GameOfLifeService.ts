import { GameOfLife } from "../model/game-of-life/GameOfLife";

export class GameOfLifeService {

  private gameOfLife: GameOfLife

  constructor() {
    this.gameOfLife = new GameOfLife(10, 10)
  }

  public getGrid(): boolean[][] {
    return this.gameOfLife.getGrid()
  }

  public resetGame(): void {
    this.gameOfLife = new GameOfLife(10, 10)
  }

  public getNextGeneration(): boolean[][] {
    this.gameOfLife.nextGeneration()
    return this.gameOfLife.getGrid()
  }
}
