import { Component, OnInit } from '@angular/core';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  faVoiceEmail = faVoicemail

  constructor() { }

  ngOnInit(): void {
  }

}
