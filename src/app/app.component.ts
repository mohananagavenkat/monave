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
    this.titleService.setTitle("This Is Default Tiltile");
    this.metaService.addTag({ name:'description' , content:"This is the demonstartion of using Angular4 Bulitin Meta Service. This is very useful to produce dynamic meta tags , and even we can update existing meta tags " });
    this.metaService.addTag( {name:'keywords',content:'Angular4 Meta Service , dynamic meta tags for an angular application'} );
    this.metaService.addTag( { name:"author" , content:'Mohana Naga Venkat.Sayempu' } );
    this.metaService.addTag( { name:"custom-meta" , content:'This is my custom meta tag' } );
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
