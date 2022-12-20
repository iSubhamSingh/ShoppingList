import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  title = 'shopping cart using Angular';
  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list);
  }  
  removeTask(id:number){

    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id);
    }

}
