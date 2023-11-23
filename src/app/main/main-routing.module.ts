import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './shared/components/container.component';
import { ContactComponent } from './shared/components/contact.component';
import { ProjectsComponent } from './shared/components/projects.component';
import { AboutComponent } from './shared/components/about.component';
import { SkillsComponent } from './shared/components/skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'MbueloMaranda', pathMatch: 'full' },
  { path: 'MbueloMaranda', component: LayoutComponent, children: [
    { path: '', redirectTo: 'AtCodSoft', pathMatch: 'full'},
    { path: 'AtCodSoft', component: ContainerComponent },
    { path: 'AtCodSoft/ContactMe', component: ContactComponent },
    { path: 'AtCodSoft/Projects', component: ProjectsComponent },
    { path: 'AtCodSoft/Skills', component: SkillsComponent },
    { path: 'AtCodSoft/AboutMe', component: AboutComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
