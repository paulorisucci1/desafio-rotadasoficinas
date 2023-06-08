import { Product } from "./Product"

export class Customer {
  name?: string
  products: Array<Product>

  constructor(name?: string) {
    this.name = name
    this.products = []
  }

  public addProduct(product: Product): void {
    this.products.push(product)
  }

  public addProducts(products: Array<Product>) {
    this.products.push(...products)
  }
}
