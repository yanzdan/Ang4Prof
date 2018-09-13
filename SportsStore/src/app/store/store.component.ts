import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public  selectedCategory = null;
  private  _selectedPage = 1;
  private  _productsPerPage = 4;

  constructor(private repository: ProductRepository) { }
  get selectedPage():number {
    return this._selectedPage;
  }

  set selectedPage(value:number) {
    this._selectedPage = value;
  }

  get productsPerPage(): number {
    return this._productsPerPage;
  }
  get products(): Product[] {
    let pageIndex = (this._selectedPage - 1) * this._productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this._productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(aNewCategory?:string){
    this.selectedCategory = aNewCategory;
  }

  changePage(newPage: number) {
    this._selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this._productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this._productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }
  get pageCount():number  {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this._productsPerPage);
  }

}
