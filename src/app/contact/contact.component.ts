import { Component, OnInit } from '@angular/core';
import { ClientQueryService } from "../client-query.service";
import { GeneralQueryService } from "../general-query.service";
import { QueryModel } from "../models/query.model"
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public clientQuery: QueryModel;
  public generalQuery: QueryModel;
  clientQuerySubmitted: boolean = false;
  generalQuerySubmitted: boolean = false;

  constructor(private clientQueryService: ClientQueryService,
    private GeneralQueryService: GeneralQueryService,
    private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.clientQueryService.previousQuries.subscribe((response) => { console.log(response) });
    this.titleService.setTitle('Contact Us - monave');
    this.metaService.updateTag({ name: 'description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, Just drop an email with your requirement we will come up with a solution.' });
    this.metaService.updateTag({ name: 'og:description', content: 'If you are looking for the first-class talent to code your custom software or a compelling website or a mobile app, Just drop an email with your requirement we will come up with a solution.' });
    this.initializeClientQuery();
    this.initializeGeneralQuery();
  }

  initializeClientQuery() {
    this.clientQuery = {
      name: "",
      email: "",
      mobile: "",
      message: ""
    }
  }

  initializeGeneralQuery() {
    this.generalQuery = {
      name: "",
      email: "",
      mobile: "",
      message: ""
    };
  }


  clientQuerySubmit($event) {
    $event.preventDefault();
    this.clientQueryService.store(this.clientQuery);
    this.clientQuerySubmitted = true;
    this.initializeClientQuery();
  }

  generalQuerySubmit($event) {
    $event.preventDefault();
    this.GeneralQueryService.store(this.generalQuery);
    this.generalQuerySubmitted = true;
    this.initializeGeneralQuery();
  }

}
