import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagesproduct',
  templateUrl: './pagesproduct.component.html',
  styleUrls: ['./pagesproduct.component.css']
})
export class PagesproductComponent implements OnInit {

  @Input() fullWidthMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
