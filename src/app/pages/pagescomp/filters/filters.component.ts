import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { WebshopService } from '../../../services/webshop.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Output() showCategory = new EventEmitter<string>();

  categoriesSubscription: Subscription | undefined;
  categories: string[] = [];

  constructor(private webshopService: WebshopService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.webshopService.getAllCategories()
      .subscribe((categories) => this.categories = categories);
  }

  onShowCategory(newCategory: string): void {
    console.log('Category:', newCategory);
    this.showCategory.emit(newCategory);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
