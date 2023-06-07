import { Customer } from "./Customer"

export class Dish {

  id?: number
  name?: string
  price: number
  private customers: Array<Customer>

  constructor(price: number, id?: number, name?: string) {
    this.price = price
    this.id = id
    this.name = name
    this.customers = []
  }

  public getCustomers(): Array<Customer> {
    return new Array(...this.customers)
  }

  public addCustomer(customer: Customer): void {
    this.customers.push(customer)
  }
}
