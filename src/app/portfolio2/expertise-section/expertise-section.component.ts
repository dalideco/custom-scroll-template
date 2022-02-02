import { Component, OnInit } from '@angular/core';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expertise-section',
  templateUrl: './expertise-section.component.html',
  styleUrls: ['./expertise-section.component.scss']
})
export class ExpertiseSectionComponent implements OnInit {

  hardSkills = [
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    },
    {
      name: 'Angular', 
      level: 8
    }

  ]

  softSkills = [
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Communication",
      icon: faComments
    },
   
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
