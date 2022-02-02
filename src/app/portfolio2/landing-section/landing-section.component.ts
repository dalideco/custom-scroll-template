import { Component, OnInit,AfterViewInit } from '@angular/core';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {

  name = "DALI SAHNOUN"
  faFileDownload = faFileDownload

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{

    const button = document.querySelector('.circle-btn');
    console.log(button);
    

    const t= gsap.timeline({})
    t.from('.scroll-text .scroll-cover',{
      stagger: 0.5,
      duration:2,
      yPercent:-100
    })
  }

}
