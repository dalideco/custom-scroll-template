import { Component, OnInit } from '@angular/core';
import { faComments, faClock, faUserPlus, faUser, faHourglass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expertise-section',
  templateUrl: './expertise-section.component.html',
  styleUrls: ['./expertise-section.component.scss']
})
export class ExpertiseSectionComponent implements OnInit {

  hardSkills = [
    {
      name: 'React',
      level: 10
    },
    {
      name: 'Vue',
      level: 8
    },
    {
      name: 'Angular',
      level: 9
    },
    {
      name: 'Node.js',
      level: 9
    },
    {
      name: 'Nestjs',
      level: 8
    },
    {
      name: 'PHP',
      level: 7
    },
    {
      name: 'Symfony',
      level: 7
    }

  ]

  softSkills = [
    {
      name: "Communication",
      icon: faComments
    },
    {
      name: "Patience",
      icon: faClock
    },
    {
      name: "Teamwork",
      icon: faUserPlus
    },
    {
      name: "Commitment",
      icon: faHourglass
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
