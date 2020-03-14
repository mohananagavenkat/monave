import { Component , OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public constructor(private router:Router ){
    this.routeEvent(this.router);
  }

  public ngOnInit(){
 }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
          window.scrollTo(0,0);
      }
    });
  }

}
