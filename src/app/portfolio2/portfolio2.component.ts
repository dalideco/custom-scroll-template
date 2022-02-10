import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ProjectShowService } from './project-show.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import scrollGsap from './functions/scrollGsap';

@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.scss']
})
export class Portfolio2Component implements OnInit {

  primaryColor = '#876445';
  secondaryColor = '#F4DFBA';
  selectedProject: any = {
    name: '',
    description: '',
  };

  faArrowLeft = faArrowLeft
  faGithub = faGithub
  faLinkedinIn = faLinkedinIn

  projectT = gsap.timeline({})


  constructor(private projectShow: ProjectShowService) {}

  ngOnInit(): void {
    this.selectedProject = this.projectShow.getSeletedProject()

    this.projectShow.ObserveProject().subscribe(project => {
      this.selectedProject = project
      this.projectAppear()
    })

    this.projectShow.observeUnselect().subscribe(() => {
      this.projectDisappear()
    })
  }

  projectAppear() {
    this.projectT.play();
  }

  projectDisappear() {
    this.projectT.reverse()
  }

  unSelect() {
    this.projectShow.unSelect();
  }

  ngAfterViewInit(): void {

    //setting up the project animation
    this.projectAnimationSetup()

    //setting colors
    this.setColors()

    //setting z indexes 
    const sections = gsap.utils.toArray('.scroll-section')
    sections.forEach((section: any, index) => {
      section.style.zIndex = index;
    })

    //gsap custom scroll
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      '(min-width:1140px)': () => { 
        document.body.style.overflowY ="scroll"
        this.scrollGsap(sections)
       },
      '(max-width:1140px)': () => { 
        document.body.style.overflow = "auto" 
      }
    })
  }

  scrollGsap(sections: any) {
    scrollGsap({
      sections: sections,
      primaryColor: this.primaryColor,
      secondaryColor: this.secondaryColor
    })
  }

  projectAnimationSetup() {
    this.projectT
      .to("#project-showcase-animation", {
        yPercent: 100
      })
      .to("#project-showcase", {
        yPercent: 100
      })
      .from("#project-showcase > *", {
        opacity: 0
      })
    this.projectT.pause();
  }

  setColors() {
    const root: HTMLElement | null = document.querySelector(':root');
    if (root) {
      //after data fetched set primary and secondary colors here
    }
  }

}
