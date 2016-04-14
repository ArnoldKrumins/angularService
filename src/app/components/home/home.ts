import {Component} from 'angular2/core';
import {ChildComponent} from "./child.component";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'home',
  template: `<h4>
              <input type="text" [(ngModel)]="dataService.Product.id">
              <child></child>
              <button (click)="save()">Save</button>
            </h4>`,
  providers: [DataService],
  directives: [ChildComponent],
  pipes: []
})
export class Home {

  constructor(private dataService:DataService) {}


  save():void{
    console.log(this.dataService.Product.id);
    console.log(this.dataService.Product.name);
  }

}
