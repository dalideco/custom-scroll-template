import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.scss']
})
export class CareerSectionComponent implements OnInit {


  education = [
    {
      title: 'Web Developer',
      place: 'webipie.me',
      date: '09/20-present',
      description: '-Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      title: 'Web Developer',
      place: 'webipie.me',
      date: '09/20-present',
      description: '-Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]

  works = [
    {
      title: 'Web Developer',
      place: 'webipie.me',
      date: '09/20-present',
      description: '-Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]

  volunteering = [
    {
      title: 'Web Developer',
      place: 'webipie.me',
      date: '09/20-present',
      description: '-Lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
