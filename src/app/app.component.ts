import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import {AddItem, Item, RemoveItem} from "./app.actions";
import {Observable} from "rxjs/Observable";
import {selectList} from "./app.reducer";

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to NGRX</h1>
      <input type="text" #input>
      <button type="button" (click)="addItem(input.value)">add item</button>
      <ul>
          <li *ngFor="let item of items | async" >{{item.title}} 
              <span (click)="removeItem(item)">x</span></li>
      </ul>  
    </div>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(private store: Store<{list: Item[]}>){
    debugger;
  }

  addItem(title: string) {
      debugger;
      this.store.dispatch(new AddItem({title, completed: false}));
      debugger;
  }

  removeItem(item: Item) {
      debugger;
      this.store.dispatch(new RemoveItem(item));
      debugger;
  }

  ngOnInit(): void {
    debugger;
    this.items = this.store.select(selectList);
  }
}
