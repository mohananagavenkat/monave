import { Component, OnInit , ViewChild } from '@angular/core';
import { ClientQueryService } from "../client-query.service";
import { GeneralQueryService } from "../general-query.service";
import { QueryModel } from "../models/query.model"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('clientform') form;

  public currentQuery:QueryModel = {
    name:"",
    email:"",
    mobile:"",
    message:""
  };

  public nameError:string;
  public emailError:string;
  public mobileError:string;
  public messageError:string;
  public formError:boolean = false ;
  public submissionMessage:string = "";

  constructor(private clientQueryService:ClientQueryService ,
              private GeneralQueryService:GeneralQueryService) { }

  ngOnInit() {
    this.clientQueryService.previousQuries.subscribe((response) => { console.log(response) } );
  }

  public querySubmit($event){
    $event.preventDefault();
    this.nameError = "";
    this.emailError = "";
    this.mobileError = "";
    this.messageError = "";
    this.formError = false;

    console.log(this.currentQuery);
    if(this.currentQuery.name == ""){
      this.formError = true;
      this.nameError = "Please Enter Your Name";
    }
    if(this.currentQuery.email == ""){
      this.formError = true;
      this.emailError = "Please Enter Your Email";
    }
    if(this.currentQuery.mobile == ""){
      this.formError = true;
      this.mobileError = "Please Enter Your Mobile Number";
    }
    if(this.currentQuery.message == ""){
      this.formError = true;
      this.messageError = "Please Enter Message";
    }
    if(this.formError == true){
      return false;
    }
    var something =  this.clientQueryService.queryDocument.push(this.currentQuery);
    console.log(something);
    this.currentQuery = {
      name:"",
      email:"",
      mobile:"",
      message:""
    }
    this.submissionMessage = "Your Message Has Been Sent Successfully.";
  }

}
