import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>()

  sort: string = 'desc';
  showItemsCount: number = 12;



  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string):void {
    this.sort = newSort;
  }

  onItemsCountUpdated(newCount: number):void {
    this.showItemsCount = newCount;
  }

  onColumnsUpdated(colCount: number) :void {
    this.columnsCountChange.emit(colCount)
  }
}
