import { Customer } from "./Customer"
import { Dish } from "./Dish"

class Restaurant {
  id?: number
  name?: string
  private dishes: Array<Dish>
  private customers: Array<Customer>

  constructor(id?: number, name?: string) {
    this.id = id
    this.name = name
    this.dishes = []
    this.customers = []
  }

  public addDish(dish: Dish): void {
    this.dishes.push(dish)
  }

  public addCustomer(customer: Customer): void {
    this.customers.push(customer)
  }

  public makeOrder(customers: Array<Customer>, dish: Dish) {
    customers.forEach(
      customer => this.registerCustomerOrder(customer, dish)
    )
  }

  public getCustomerBill(customer: Customer) {
    let totalBill = this.getTotalBillFromDishesConsumed(customer)
    return this.addTipOntoBill(totalBill)
  }

  private getTotalBillFromDishesConsumed(customer: Customer): number {
    let consumedDishes = this.dishes.filter(dish => dish.getCustomers().filter(customer1 => customer1 === customer))
    return consumedDishes.reduce( (accumulator, dish) => accumulator + dish.price, 0)
  }

  private addTipOntoBill(bill: number) {
    return bill * 1.1
  }

  private registerCustomerOrder(customer: Customer, dish: Dish) {
    customer.addDish(dish)
    dish.addCustomer(customer)
  }
}
