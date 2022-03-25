import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.scss']
})
export class CareerSectionComponent implements OnInit {


  education = [
    {
      title: 'Baccalaureate in Mathematics',
      place: 'Ennasr High School',
      date: '09/2016-07/2019',
      description: ''
    },
    {
      title: 'Software Engineering',
      place: 'INSAT',
      date: '09/2019-present',
      description: ''
    }
  ]

  works = [
    {
      title: 'Web Developer',
      place: 'DEX(through upwork)',
      date: '02/2022-present',
      description: `- Worked on a serum DEX trade web application`
    },
    {
      title: 'Co-founder & Frontend developer',
      place: 'webipie.me',
      date: '09/2021-present',
      description: `- Worked on a portfolio builder application (this template will be available on webipie.me)`
    },
    {
      title: 'Web development Intern',
      place: 'webipie.me',
      date: '06/2020-09/2020',
      description: `- Worked on a web app for the purpose of selling a cryto trade card`
    },
  ]

  volunteering = [
    {
      title: 'Webmaster',
      place: 'IEEE IAS INSAT',
      date: '09/20-present',
      description: '-Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
