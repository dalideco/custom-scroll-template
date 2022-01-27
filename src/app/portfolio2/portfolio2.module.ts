import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Portfolio2RoutingModule } from './portfolio2-routing.module';
import { Portfolio2Component } from './portfolio2.component';
import { AboutmeSectionComponent } from './aboutme-section/aboutme-section.component';
import { AchievementsSectionComponent } from './achievements-section/achievements-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { CareerSectionComponent } from './career-section/career-section.component';
import { ExpertiseSectionComponent } from './expertise-section/expertise-section.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    Portfolio2Component,
    AboutmeSectionComponent,
    AchievementsSectionComponent,
    ContactSectionComponent,
    CopyrightsComponent,
    CareerSectionComponent,
    ExpertiseSectionComponent,
    LandingSectionComponent,
    ProjectSectionComponent,
    TestimonialsSectionComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    Portfolio2RoutingModule
  ]
})
export class Portfolio2Module { }
