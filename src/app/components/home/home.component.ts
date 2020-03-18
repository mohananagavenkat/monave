import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title , private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Best Web & Mobile Application Development Company Guntur - monave');
    this.metaService.updateTag({name:'description',content:'monave conveys extensive web services extending from custom web architecture to development of complex web frameworks and versatile applications that supply different needs'});
    this.metaService.updateTag({name:'og:description', content:'monave conveys extensive web services extending from custom web architecture to development of complex web frameworks and versatile applications that supply different needs'});
  }

}
