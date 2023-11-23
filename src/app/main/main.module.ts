import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { HomeComponent } from './shared/components/home.component';
import { ContainerComponent } from './shared/components/container.component';
import { AboutComponent } from './shared/components/about.component';
import { MiniaboutComponent } from './shared/components/miniabout.component';
import { AboutminiComponent } from './shared/components/aboutmini.component';
import { AboutcontactComponent } from './shared/components/aboutcontact.component';
import { AboutpersonalComponent } from './shared/components/aboutpersonal.component';
import { FooterComponent } from './shared/components/footer.component';
import { ProjectsComponent } from './shared/components/projects.component';
import { SkillsComponent } from './shared/components/skills.component';
import { SkillComponent } from './shared/components/skill.component';
import { ContactComponent } from './shared/components/contact.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HomeComponent,
    ContainerComponent,
    AboutComponent,
    MiniaboutComponent,
    AboutminiComponent,
    AboutcontactComponent,
    AboutpersonalComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    SkillComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
