import { Component, OnInit } from '@angular/core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-achievements-section',
  templateUrl: './achievements-section.component.html',
  styleUrls: ['./achievements-section.component.scss']
})
export class AchievementsSectionComponent implements OnInit {

  faTrophy=faTrophy

  constructor() { }

  achievements: any[]= [
    {
      name: 'Hackathon ta mère la pute',
      content: 'lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      name: 'Hackathon ta mère la pute',
      content: 'lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      name: 'Hackathon ta mère la pute',
      content: 'lorem ipsum lorem ipsum lorem ipsum'
    },
    {
      name: 'Hackathon ta mère la pute',
      content: 'lorem ipsum lorem ipsum lorem ipsum'
    },
  ]

  ngOnInit(): void {
  }

}
