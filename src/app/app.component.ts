import { Component , OnInit, HostBinding } from '@angular/core';
import { Title , Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public constructor(private titleService:Title , private metaService:Meta, private router:Router ){
    this.routeEvent(this.router);
  }

  public ngOnInit(){
    this.metaService.addTag({name:"",content:""});
    this.metaService.addTag({name:"",content:""});
    this.metaService.addTag({name:"",content:""});
    this.metaService.addTag({name:"",content:""});
    this.getAuthor();
    this.getAllMeta();
 }

  public setTitle(title:string){
    this.titleService.setTitle(title);
    this.title = this.titleService.getTitle();
  }

  getAuthor(){
    console.log(this.metaService.getTag('name=author'));
    console.log(this.metaService.getTag('name=author').getAttribute('content'));
  }

  getAllMeta(){
    console.log(window.document.querySelectorAll('meta[name]'));
  }

  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
          window.scrollTo(0,0);
      }
    });
  }

}
