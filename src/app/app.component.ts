import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tokenResponse: Object;
  title = 'nuts-dot-com';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.setToken();
  }
  setToken(){
    //Work in Progress
    this.authService.getToken().subscribe(
      response =>{
        this.tokenResponse = response;
      },error => {
        console.log(error);
      });
  }
}
