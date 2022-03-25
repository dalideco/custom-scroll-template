import { faLess } from '@fortawesome/free-brands-svg-icons'
import gsap from 'gsap'

interface Props {
    sections: any,
    primaryColor: string,
    secondaryColor:string
}

export default function scrollGsap({
    sections,
    primaryColor,
    secondaryColor
}:Props):void {
    //setting up scroll trigger
    const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#scroll-container',
          markers:false,
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
          color: primaryColor
        },'about')
        .from('#about>*',{
          opacity: 0,
          x: 100
        })
        // .to('#landing > *',{opacity: 0},'about')
  
        //expertise sections
        .add('expertise')
        .to('#expertise',{
          xPercent:100,
        },'expertise')
        .to('nav', {
          color: secondaryColor
        },'expertise')
        .from('#expertise>*',{
          opacity: 0,
          x: -100
        })
  
        //career section
        .add('career')
        .to('#career',{
          yPercent:100
        },'career')
        .to('nav',{
          color:primaryColor
        },'career')
        .from('#career>*',{
          opacity: 0,
          y: -100
        })
  
        // //achievements section
        // .add('achievements')
        // .to('#achievements',{
        //   yPercent:100
        // },'achievements')
        // .to('nav',{
        //   color:secondaryColor
        // },'achievements')
        // .from('#achievements>*',{
        //   opacity: 0,
        //   y: -100
        // })
  
        //projects section
        .add('projects')
        .to('#projects',{
          xPercent:-100
        },'projects')
        .to('nav',{
          color:primaryColor
        },'projects')
        .from('#projects>*',{
          opacity: 0,
          x: 100
        })
  
        //testimonials section
        .add('testimonials')
        .to('#testimonials',{
          xPercent:100
        },'testimonials')
        .to('nav',{
          color:secondaryColor
        },'testimonials')
        .from('#testimonials>*',{
          opacity: 0,
          x:-100
        })
  
        //contact section
        .add('contact')
        .to('#contact',{
          yPercent:100
        },'contact')
        .to('nav',{
          color:primaryColor
        },'contact')
        .from('#contact>*',{
          opacity: 0,
          y: -100
        })
  
        //copyrights
        .add('copyrights')
        .to('#copyrights',{
          yPercent:100
        },'copyrights')
        .to('nav',{
          color:secondaryColor
        },'copyrights')
        .from('#copyrights>*',{
          opacity: 0,
          y: -100
        })
}