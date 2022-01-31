import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-aboutme-section',
  templateUrl: './aboutme-section.component.html',
  styleUrls: ['./aboutme-section.component.scss']
})
export class AboutmeSectionComponent implements OnInit {

  faGithub=faGithub
  faLinkedinIn = faLinkedinIn

  constructor() { }

  ngOnInit(): void {
  }

}
