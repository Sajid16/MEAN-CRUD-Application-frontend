import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList: Item[] = [];
  selectedItem: Item;
  toggleForm: boolean = false;


  constructor(private dataService: DataService) { }


  // this function will get all the data from data service class
  // data service class will collect data from api
  getItems() {
    this.dataService.getShoppingItems()
      .subscribe(items => {
        this.shoppingItemList = items;
        // console.log('data from dataservice: '+this.shoppingItemList[0].itemName);
      });
  }



  // get data from client form and send it to data service class(addShoppingItem) function and in return
  // get a message as json if it is successful
  addItems(frm) {
    // console.log(frm.value);
    let newItem: Item = {
      itemName: frm.value.itemName,
      itemQuantity: frm.value.itemQuantity,
      itemBought: false
    }
    console.log("output of newItem variable: "+newItem);
    this.dataService.addShoppingItem(newItem)
      .subscribe(item => {
        console.log(item);
        this.getItems();
      });
  }


  // call delete function with id to delete from backend
  deleteItem(id) {
    this.dataService.deleteShoppingItem(id)
      .subscribe(data => {
        console.log(data);

        if (data.n == 1) {
          for (var i = 0; i < this.shoppingItemList.length; i++) {
            if (id == this.shoppingItemList[i]._id) {
              this.shoppingItemList.splice(i, 1);
            }
          }
          // this.getItems();
        }

      });
  }


  // update functionalities
  editItems(editfrm) {
    if (editfrm.value.itemQuantity < 0) {
      alert('update not possible');
    }
    else {
      // console.log(editfrm.value)
      let updateItem: Item = {
        _id: this.selectedItem._id,
        itemName: editfrm.value.itemName,
        itemQuantity: editfrm.value.itemQuantity,
        itemBought: editfrm.value.itemBought
      }
      console.log();
      this.dataService.updateShoppingItem(updateItem)
        .subscribe(result => {
          // console.log("value of result is: "+result);
          this.getItems();
          this.toggleForm = !this.toggleForm;
          // console.log('on line 83');
        });
    }

  }


  showEditForm(editfrm) {
    this.toggleForm = !this.toggleForm;
    this.selectedItem = editfrm;
  }

  ngOnInit() {
    this.getItems();
  }

}
