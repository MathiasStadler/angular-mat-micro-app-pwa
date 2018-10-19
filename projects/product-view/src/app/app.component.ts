
import { Component, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, Input , OnInit } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-view',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductViewComponent implements OnInit {

  public productlist: any[] = [
    {
      productname : 'JBL Flip 4',
      code : 'cat1-0001',
      price : 18.01,
      cartprice : 0,
      available : 10,
      qty : 0
    }, {
      productname : 'Bose Sound Link',
      code : 'cat1-0010',
      price : 129.05,
      cartprice : 0,
      available : 9,
      qty : 0
    }, {
      productname : 'AB Portable',
      code : 'cat1-0008',
      price : 19.78,
      cartprice : 0,
      available : 11,
      qty : 0
    }, {
      productname : 'AE-9 Portable',
      code : 'cat1-0011',
      price : 299.99,
      cartprice : 0,
      available : 8,
      qty : 0
    }, {
      productname : 'JBL Pulse 3',
      code : 'cat1-0009',
      price : 23.05,
      cartprice : 0,
      available : 10,
      qty : 0
    }
  ];



  displayedColumns: string[] = ['productname' , 'code' , 'price' , 'cartprice' , 'available' , 'qty' , 'actions'];
  dataSource = this.productlist;



  _message: string;

  constructor() {
  }

  ngOnInit() {

    console.log( '[ProductViewComponent] onInit()');

  }

  @Input()
  set message(message: string) {
    const productObj = message;
    for (const product of this.productlist) {
      if (product.productname === productObj['productname']) {
        product.qty = productObj['qty'];
        break;
      }
    }

  }

  get message(): string { return this._message; }

  public addToCart(product) {
    console.log('product => ', product);
    if ( product.qty === product.available) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('product-cart');
      if (productcartele != null) {
        productcartele['message'] = product;
      } else {

        console.log('product-cart not there');
      }
    }
   }

public handleRowClick(row) {

  console.log( 'row => ' , row);

}


}
