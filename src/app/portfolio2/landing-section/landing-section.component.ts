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
      stagger: 0.25,
      duration:1,
      yPercent:-100
    }).from('.scroll-btn',{
      duration: 1,
      x: -200,
      opacity:0,
    },'-=0.7')
    .from('.scroll-btn-icon',{
      opacity:0
    })
  }

}
