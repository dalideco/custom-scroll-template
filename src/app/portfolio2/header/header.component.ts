import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttons: any[] = [
    {
      name: 'About me'
    },
    {
      name: 'Expertise'
    },
    {
      name: 'Career'
    },
    {
      name: 'Achievements'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Testimonials'
    },
    {
      name: 'Contact me'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
