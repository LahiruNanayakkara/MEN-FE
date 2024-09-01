import {
  Component,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { categoryWithCount, priceRange } from "../../../models/product";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrl: "./filters.component.scss",
})
export class FiltersComponent implements OnInit {
  @Output("afterCategorySelected") afterCategorySelected =
    new EventEmitter<string>();

  @Output("afterPriceRangeSelected") afterPriceRangeSelected =
    new EventEmitter<priceRange>();

  categoriesWithCount: categoryWithCount[] = [];
  minPriceSelected: number = 20;
  maxPriceSelected: number = 500;
  categorySelected: string = "";

  constructor(
    // private readonly _formBuilder: FormBuilder,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoriesWithCount =
      this.productService.getProductByCategoryWithCount();
  }

  // readonly toppings = this._formBuilder.group({});

  onCategorySelected(category: string) {
    this.categorySelected = category;
    this.afterCategorySelected.emit(category);
  }

  onCategorySelectedClear() {
    this.categorySelected = "";
    this.afterCategorySelected.emit(this.categorySelected);
  }

  onPriceRangeChange() {
    const priceRange: priceRange = {
      min: this.minPriceSelected,
      max: this.maxPriceSelected,
    };
    this.afterPriceRangeSelected.emit(priceRange);
  }

  checkPriceRangeSelected() {
    if (this.minPriceSelected != 20 || this.maxPriceSelected != 500) {
      return true;
    }
    return false;
  }

  onPriceRangeClear() {
    this.minPriceSelected = 20;
    this.maxPriceSelected = 500;
    const priceRange: priceRange = {
      min: this.minPriceSelected,
      max: this.maxPriceSelected,
    };
    this.afterPriceRangeSelected.emit(priceRange);
  }
}
