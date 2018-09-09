import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => {
          return array.indexOf(c) === index;
        }).sort();
    });
  }
  getProducts(aProductCategory: string = null): Product[] {
    return this.products
      .filter(p => aProductCategory == null || aProductCategory === p.category);
  }
  getProduct(aProductId: number): Product {
    return this.products.find(p => p.id == aProductId);
  }
  getCategories(): string[] {
    return this.categories;
  }
}
