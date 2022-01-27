import { Component, OnInit, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.scss']
})
export class Portfolio2Component implements OnInit {

  primaryColor= '#876445';
  secondaryColor= '#F4DFBA';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.scroll-section')
    console.log(sections);
    

    //setting up scroll trigger
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-container',
        markers:true,
        scrub: 1,
        pin:true,
        //@ts-ignore
        end: ()=> "+=" + document.querySelector('#scroll-container').offsetHeight*(sections.length)
      }
    })

    //scroll animations
    t1

      //about sections
      .add('about')
      .to('#about',{
        xPercent:-100
      },'about')
      .to('nav',{
        color: this.primaryColor
      },'about')

      //expertise sections
      .add('expertise')
      .to('#expertise',{
        xPercent:100,
      },'expertise')
      .to('nav', {
        color: this.secondaryColor
      },'expertise')

      //career section
      .add('career')
      .to('#career',{
        yPercent:100
      },'career')
      .to('nav',{
        color:this.primaryColor
      },'career')

      //achievements section
      .add('achievements')
      .to('#achievements',{
        yPercent:100
      },'achievements')
      .to('nav',{
        color:this.secondaryColor
      },'achievements')

      //projects section
      .add('projects')
      .to('#projects',{
        xPercent:-100
      },'projects')
      .to('nav',{
        color:this.primaryColor
      },'projects')

      //testimonials section
      .add('testimonials')
      .to('#testimonials',{
        xPercent:100
      },'testimonials')
      .to('nav',{
        color:this.secondaryColor
      },'testimonials')

      //contact section
      .add('contact')
      .to('#contact',{
        yPercent:100
      },'contact')
      .to('nav',{
        color:this.primaryColor
      },'contact')

      //copyrights
      .add('copyrights')
      .to('#copyrights',{
        yPercent:100
      },'copyrights')
      .to('nav',{
        color:this.secondaryColor
      },'copyrights')
    
  }

}
