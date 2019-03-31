import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList = 
  [
    {"id": 1, "name":"peanuts","description" : "Sugar Toasted Peanuts"}, 
    {"id": 2, "name":"Roasted Almonds","description" : "Honey Roasted Almonds"},
    {"id": 3, "name":"Raisins","description" : "Chocolate coated raisins"}
  ]

  selectedItem: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  viewDetails(product){
    this.selectedItem = product;
    console.log(product);
    this.router.navigate(['..', "product-details"], {relativeTo: this.route})
    
  }

}
