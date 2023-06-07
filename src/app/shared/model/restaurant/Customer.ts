import { Dish } from "./Dish"

export class Customer {
  id?: number
  name?: string
  private dishes: Array<Dish>

  constructor(id?: number, name?: string) {
    this.id = id
    this.name = name
    this.dishes = []
  }

  public getDishes(): Array<Dish> {
    return new Array(...this.dishes)
  }

  public addDish(dish: Dish): void {
    this.dishes.push(dish)
  }
}
