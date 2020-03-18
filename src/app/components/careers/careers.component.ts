import { Component, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  @ViewChild('jobform') jobform: NgForm;
  application = {
    name: '',
    email: '',
    mobile: '',
    job: '',
    message: ''
  };
  jobFormData = new FormData();

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Careers - monave');
    this.metaService.updateTag({ name: 'description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });
    this.metaService.updateTag({ name: 'og:description', content: 'monave is a team of Software Engineers spread around the world.Join with us and we can build a next generation product together 👍' });

  }

  initializeApplication() {
    this.jobform.resetForm(null);
  }

  onResumeChange(event) {
    const files: FileList = event.target.files;
    console.log(files);
    this.jobFormData.append('resume', files[0], files[0].name);
  }

  applyjob(event: Event) {
    event.preventDefault();
    console.log(this.application);
    for (let key in this.application) {
      this.jobFormData.append(key, this.application[key]);
    }
    console.log(this.jobFormData.has('resume'));
  }

}
