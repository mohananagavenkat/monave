import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private titleService: Title , private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Services - Web & Mobile Applications');
    this.metaService.updateTag({name:'description',content:'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, we are definitely the top contenders.Some of our Key Services:Web Designing,Web Application Development,Mobile Application Development,Web Hosting'});
    this.metaService.updateTag({name:'og:description', content:'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, we are definitely the top contenders.Some of our Key Services:Web Designing,Web Application Development,Mobile Application Development,Web Hosting'});
  }

}
