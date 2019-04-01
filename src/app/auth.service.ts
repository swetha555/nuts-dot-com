import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders, HttpRequest } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpClient {
    productDetailsSelected : any;
    constructor(handler: HttpBackend,
      private http: HttpClient) {
        super(handler);
    }
    getToken(){
          //Work in Progress
      const username = 'BZaa-av5L6RmZKlPgZaGNkea';
      const password = 'jchbf_Q5zRWCaEg4TCB4m9cLIioPiml0';
      const url = 'https://auth.commercetools.co/oauth/token';

      let headers = new Headers();
      headers.append('grant_type','client_credentials');
      headers.append('scope', 'view_products:nuts-custom-demo-1');
      headers.append('Authorization' , 'Basic toBase64String(`${username}:${password}`)');
      
      return this.http.post(url,{headers:headers});
    }
    getAuthorizationToken(){
      const access_token = 'E-bGu_llaL1yzl0chtt33VUSr8sWt9mZ';
      return access_token;
    }
    getProductList(offset, limit): Observable<any>{
      const baseUrl = 'https://api.commercetools.co/nuts-custom-demo-1';
      const url = baseUrl + `'/products?offset=${offset}'&limit='${limit}`;
      return this.http.get(url);
 
    }
    getProductDetails(productId): Observable<any>{
      const baseUrl = 'https://api.commercetools.co/nuts-custom-demo-1';
      const url = baseUrl + '/products/' + productId;
      return this.http.get(url);
 
    }
}