import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { Application } from '../models/application.model';
import { finalize } from 'rxjs/operators'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { appConfig } from '../../assets/config/config';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  task: AngularFireUploadTask;
  downloadURL: Observable<any>;
  jobApplicationsCollection: AngularFireList<Application>;


  constructor(private http: HttpClient, private storage: AngularFireStorage, private db: AngularFireDatabase) {
    this.jobApplicationsCollection = this.db.list("/job-application-collection");
  }

  public save(applicationData: Application, files: FileList): any {

    const file = files.item(0);
    // reading the file as data uri to send to the backend
    // const reader = new FileReader();
    // reader.onload = function(){
    //   applicationData['resumeURI'] = this.result;
    // }
    // reader.readAsDataURL(file);
    // upload the resume file to firestorage and get the url
    const path = `resume/${new Date().getTime()}_${file.name}`;
    const customMetadata = { from: applicationData.name, email: applicationData.email }

    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });

    this.task.snapshotChanges().pipe(
      finalize(() => { })
    ).subscribe(data => {
      if (data.bytesTransferred === data.totalBytes) {
        console.log(data);
        return this.storage.ref(path).getDownloadURL().subscribe(url => {
          console.log(url);
          applicationData['resume_name'] = path;
          applicationData['resume_url'] = url;
          this.jobApplicationsCollection.push(applicationData);
          this.sendEmail(applicationData).subscribe(apiResponse => {
            console.log(apiResponse);
            return true;
          })
        });
      }
    });
  }

  sendEmail(applicationData){
    return this.http.post(`${appConfig.api}/job-application`,applicationData);
  }

}
