import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  title = 'shoppingcart';

  public items: string[] = [];
  public quant: number[] = [];
  public map = new Map<string, number>;
  public newItems: any;
  public newQuant: any;
  
  public addToList()
  {
    if(this.newItems == '' || this.newQuant == ''){
      alert("Please Enter Item Name and its Quantity")
    }
    else{
      this.map.set(this.newItems,this.newQuant);
      this.newItems = '';
      this.newQuant = '';
    }
  }

  public removeFromList(index : string){
    this.map.delete(index);
  }
}
