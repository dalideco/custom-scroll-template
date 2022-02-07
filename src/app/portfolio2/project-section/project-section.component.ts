import { Component, OnInit } from '@angular/core';

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
      description :'A type racing application'
    }
  ]


  constructor() { }

  ngOnInit(): void {

  }

}
