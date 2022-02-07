import { Component, OnInit } from '@angular/core';
import { ProjectShowService } from '../project-show.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  projects : any[] = [
    {
      name: 'WipeLacer',
      description :'A type racing application'
    },
    {
      name: 'WipeLacer',
      description :'A type racing '
    }
  ]

  selectedItem : any ;


  constructor(
    private projectShow: ProjectShowService
  ) { }

  ngOnInit(): void {
    this.selectedItem = this.projects[0];
  }

  showProject(i:number ):void {
    //show project i
    
    this.projectShow.selectProject(this.projects[i]);
    
  }

}
