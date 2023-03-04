import { Component, OnInit } from '@angular/core';

const ROW_HEIGHT: { [id: number]: number } = { 1:400, 3:335 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cols = 2;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(columnsNum: number): void {
    this.cols = columnsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(newcategory: string): void {
    this.category = newcategory;
  }

}
