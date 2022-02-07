import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type direction = -1 |1;

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent implements OnInit {

  faArrowRight = faArrowRight
  faArrowLeft = faArrowLeft
  testimonials: any[] = [
    {
      image: 'assets/me.jpg', 
      quote:'3ali dali is the best', 
      name: 'Dali Sahnoun'
    },
    {
      image: 'assets/me.jpg', 
      quote:'3ali dali is the best', 
      name: 'Dali Sahnoun'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  Xvalue =0;
  @ViewChild('cardcontainer') container :any ; 
  slide(direct: direction): void {
    const el:HTMLElement = this.container.nativeElement
    el.scrollBy({
      left: (window.innerWidth-200)*direct
    })
  }

}
