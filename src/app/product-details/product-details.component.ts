import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedItem:any;
  productId: any;
  eventEmitted:any;
  unitPrice: any = "N/A";
  organicBadge: boolean = false;
  currencyCode:any = "N/A";
  fallBackImageUrl: string = "../../assets/ece4edb2868a8225.cro-U2aFaCJE-thumb.jpg"


  constructor(
    private router: Router,  
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.selectedItem = this.authService.productDetailsSelected;
    if(this.selectedItem) {
      this.unitPrice = this.calculatePrice();
      this.checkForOrganicBadge();
    }
    else this.router.navigate(['..', "products"], { relativeTo: this.route })
  }
  navigate(){
    this.router.navigate(['..', "products"], { relativeTo: this.route })
  }
  calculatePrice(){
    //CALCULATE PRICE IN $$$ USD FORMAT
    if(this.selectedItem.masterData.current.masterVariant.prices.length) {
      let centAmount = this.selectedItem.masterData.current.masterVariant.prices[0].value.centAmount;
      let fractionDigits = this.selectedItem.masterData.current.masterVariant.prices[0].value.fractionDigits || 0.1;
      this.currencyCode = this.selectedItem.masterData.current.masterVariant.prices[0].value.currencyCode;
    return (centAmount) / (10 * fractionDigits);
  }
}
  checkForOrganicBadge(){
    //CHECK IF ORGANIC BADGE IS TRUE
    let organicBadge = this.selectedItem.masterData.current.masterVariant.attributes;
    for (let attribute of organicBadge) {
      if(attribute.name =="Organic" && attribute.value == true) this.organicBadge = true;
  }
  }

  getProductDetails(){
    //FUTURE USE - MORE DETAILED GET REQUEST WITH PRODUCT ID
    this.authService.getProductDetails(this.productId).subscribe(
      response =>{
        // this.productList = response.results;
      },error => {
        console.log(error);
      });  
  } 

}
