export class GameOfLife {
  private readonly width: number;
  private readonly height: number;
  private grid: boolean[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
  }

  private createGrid(): boolean[][] {
    const grid: boolean[][] = [];

    for (let i = 0; i < this.height; i++) {
      grid.push(Array(this.width).fill(false));
    }

    return grid;
  }

  public getGrid(): boolean[][] {
    return this.grid
  }

  public randomize(): void {
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        this.grid[row][col] = Math.random() < 0.5;
      }
    }
  }

  public nextGeneration(): void {
    const newGrid: boolean[][] = this.createGrid();

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const alive = this.grid[row][col];
        const neighbors = this.countNeighbors(row, col);

        if (alive && (neighbors < 2 || neighbors > 3)) {
          newGrid[row][col] = false; // Cell dies due to underpopulation/overpopulation
        } else if (!alive && neighbors === 3) {
          newGrid[row][col] = true; // Cell reproduces due to reproduction rule
        } else {
          newGrid[row][col] = alive; // Cell remains in its current state
        }
      }
    }

    this.grid = newGrid;
  }

  private countNeighbors(row: number, col: number): number {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) {
          continue; // Skip the current cell
        }

        const neighborRow = row + i;
        const neighborCol = col + j;

        if (
          neighborRow >= 0 &&
          neighborRow < this.height &&
          neighborCol >= 0 &&
          neighborCol < this.width &&
          this.grid[neighborRow][neighborCol]
        ) {
          count++;
        }
      }
    }

    return count;
  }

  public display(): void {
    for (let row = 0; row < this.height; row++) {
      let line = '';

      for (let col = 0; col < this.width; col++) {
        const cell = this.grid[row][col];
        line += cell ? '■ ' : '□ ';
      }

      console.log(line);
    }
  }
}
