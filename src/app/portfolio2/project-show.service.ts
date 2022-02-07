import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectShowService {

  selectedProject= {
    name: 'test',
    description: 'test', 
  } ;
  subject = new Subject<any>()
  unSubject = new Subject();


  constructor() { 
    this.subject.next(this.selectedProject)
  }

  selectProject (sp:any){
    // console.log(sp);
    
    this.selectedProject = sp;
    this.subject.next(this.selectedProject)
  }

  unSelect():void {
    this.unSubject.next("something")
  }

  observeUnselect() {
    return this.unSubject.asObservable();
  }

  

  getSeletedProject(){
    return this.selectedProject
  }

  ObserveProject(){
    return this.subject.asObservable();
  }

}
