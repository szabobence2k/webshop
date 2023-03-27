import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagesheader',
  templateUrl: './pagesheader.component.html',
  styleUrls: ['./pagesheader.component.css']
})
export class PagesheaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShow = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void {
    this.itemsShow = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(columns: number): void {
    this.columnsCountChange.emit(columns);
  }
}
