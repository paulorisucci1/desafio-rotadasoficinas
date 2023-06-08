import { Product } from "./Product"

export class Customer {
  name?: string
  private products: Array<Product>

  constructor(name?: string) {
    this.name = name
    this.products = []
  }

  public getProducts(): Array<Product> {
    return new Array(...this.products)
  }

  public addProduct(product: Product): void {
    this.products.push(product)
  }
}
