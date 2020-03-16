import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title , private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('About Us - monave');
    this.metaService.updateTag({name:'description',content:'monave is a team of Software Engineers spread around the world. Combining our solid business domain knowledge, technical expertise, profound knowledge of most modern industry trends and quality-driven delivery model we offer progressive end-to-end solutions.'});
    this.metaService.updateTag({name:'og:description', content:'monave is a team of Software Engineers spread around the world. Combining our solid business domain knowledge, technical expertise, profound knowledge of most modern industry trends and quality-driven delivery model we offer progressive end-to-end solutions.'});
  }

}
