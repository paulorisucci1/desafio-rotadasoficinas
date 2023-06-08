import { Customer } from "./Customer"
import { Product } from "./Product"

export class Restaurant {
  name?: string
  readonly products: Array<Product>
  readonly customers: Array<Customer>

  constructor(name?: string) {
    this.name = name
    this.products = []
    this.customers = []
  }

  public addProduct(product: Product): void {
    this.products.push(product)
  }

  public addCustomer(customer: Customer): void {
    this.customers.push(customer)
  }

  public makeOrder(customers: Array<Customer>, product: Product) {
    customers.forEach(
      customer => this.registerCustomerOrder(customer, product)
    )
  }

  public getCustomerBill(customer: Customer) {
    let totalBill = this.getTotalBillFromProductsConsumed(customer)
    return this.addTipOntoBill(totalBill)
  }

  private getTotalBillFromProductsConsumed(customer: Customer): number {

    let consumedProducts = this.products.filter(product => product.getCustomers().includes(customer))
    return consumedProducts.reduce( (accumulator, product) => accumulator + product.price! / product.getCustomers().length , 0)
  }

  private addTipOntoBill(bill: number) {
    return bill * 1.1
  }

  private registerCustomerOrder(customer: Customer, product: Product) {
    customer.addProduct(product)
    product.addCustomer(customer)
  }
}
