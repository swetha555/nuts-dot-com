import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public productList: any = [];

  selectedItem: any;
  productListNew: any;
  temp: any = 'hello';
  offset: any = 0;
  limit: any = 10;
  fallBackImageUrl: string = "../../assets/ece4edb2868a8225.cro-U2aFaCJE-thumb.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    public el: ElementRef
  ) { }

  ngOnInit() {
    this.getProductList(this.offset,this.limit);
  }
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    //Work in Progress INFINITE SCROLL
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // if (scrollPosition >= componentPosition) {
    //     this.offset = this.offset + 11;
    //     this.limit = 10;
    //     this.getProductList(this.offset, this.limit);     
    // }else{
    //   this.offset = 0;
    //   this.limit = 10;
    // }

  }

  viewDetails(product) {
    //ON CLICK OF PRODUCT
    this.selectedItem = product;
    this.authService.productDetailsSelected = product;
    this.router.navigate(['..', "product-details"], { relativeTo: this.route })

  }
  getProductList(offset,limit) {
    this.authService.getProductList(this.offset,this.limit).subscribe(
      response =>{
        this.productList = response.results;
      },error => {
        console.log(error);
      });  
  }

}
