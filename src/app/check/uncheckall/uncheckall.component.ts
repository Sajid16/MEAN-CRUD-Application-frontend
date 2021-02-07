import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncheckall',
  templateUrl: './uncheckall.component.html',
  styleUrls: ['./uncheckall.component.scss']
})
export class UncheckallComponent implements OnInit {

  name = 'Angular';
  isMasterSel:boolean;
  categoryList:any;
  checkedCategoryList:any;

  constructor() { 
    this.isMasterSel = false;
  
      this.categoryList = [
        {id:1, value:'PHP',isSelected:false},
        {id:2,value:'Laravel',isSelected:false},
        {id:3,value:'Angular',isSelected:true},
        {id:4,value:'React',isSelected:true},
        {id:5,value:'Vue',isSelected:true},
        {id:6,value:'JQuery',isSelected:false},
        {id:7,value:'Javascript',isSelected:false},
      ];
  
      // this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if(this.categoryList[i].isSelected)
      this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

  ngOnInit(): void {
    this.getCheckedItemList();
  }

}
