import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges {
  @Input() childshoppingItemList: any[];

  // displayedColumns: string[] = ['Serial', 'ItemName', 'Quantity'];
  // dataSource = this.childshoppingItemList;


  constructor() { }

  ngOnInit() {
    console.log('value in child: ', this.childshoppingItemList);
  }

  ngOnChanges() {
    console.log('value in child', this.childshoppingItemList);
  }

}
