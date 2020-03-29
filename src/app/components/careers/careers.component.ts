import { Component, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { JobApplicationService } from 'src/app/services/job-application.service';
import { Application } from 'src/app/models/application.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  @ViewChild('jobform') jobform: NgForm;
  application:Application = {
    name: '',
    email: '',
    mobile: '',
    job: '',
    message: ''
  };
  files: FileList

  constructor(private titleService: Title, private metaService: Meta,private newApplication:JobApplicationService) { }

  ngOnInit() {
    this.titleService.setTitle('Careers - monave');
    this.metaService.updateTag({ name: 'description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });
    this.metaService.updateTag({ name: 'og:description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });

  }

  initializeApplication() {
    this.jobform.resetForm(null);
  }

  onResumeChange(event) {
    this.files = event.target.files;
  }

  applyjob(event: Event) {
    event.preventDefault();
    console.log(this.application);
    // return;
    this.newApplication.save({...this.application},this.files);
    this.jobform.resetForm();
  }

}
