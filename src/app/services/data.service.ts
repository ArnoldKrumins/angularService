/**
 * Created by arnoldkrumins on 14/04/2016.
 */
import {Injectable} from 'angular2/core';

export public class Product{

  public id:number;
  public name:string;
  public price:number;

}


@Injectable()
export class DataService {

  public Product:Product;


  constructor() {

    this.Product = new Product();
    this.Product.id = 1;
    this.Product.name = 'Nutella';
  }




}
