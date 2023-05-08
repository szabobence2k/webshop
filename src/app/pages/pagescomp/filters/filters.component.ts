import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebshopService } from '../../../services/webshop.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() categorySelected = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: string[] = [];

  constructor(private webshopService: WebshopService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesSubscription = this.webshopService.getAllCategories()
      .subscribe((categories: any[]) => {
        return this.categories = categories.map((item) => item.category);
      });
  }

  filterByCategory(category: string): void {
    this.categorySelected.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
