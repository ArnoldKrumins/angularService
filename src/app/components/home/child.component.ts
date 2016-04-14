/**
 * Created by arnoldkrumins on 14/04/2016.
 */
import {Component} from 'angular2/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'child',
  template: `<div>
                <input [(ngModel)]="dataService.Product.name" type="text">
             </div>`,
  providers: [],
  directives: [],
  pipes: []
})
export class ChildComponent {

  constructor(private dataService:DataService) {}

}
