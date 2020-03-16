import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(private titleService: Title , private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Careers - monave');
    this.metaService.updateTag({name:'description',content:'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍'});
    this.metaService.updateTag({name:'og:description', content:'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍'});
  }

}
