import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>();

  categories = ['autok', 'alkatreszek'];

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category:string): void {
    this.showCategory.emit(category);
  }

}
