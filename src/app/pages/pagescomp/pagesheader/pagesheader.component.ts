import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagesheader',
  templateUrl: './pagesheader.component.html',
  styleUrls: ['./pagesheader.component.css']
})
export class PagesheaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'csokkenoen';
  itemsShowCount=10;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(columns: number): void {
    this.columnsCountChange.emit(columns);
  }
}
