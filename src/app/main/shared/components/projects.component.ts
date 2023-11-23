import { Component } from '@angular/core';
import { IProject } from '../interface/project';

@Component({
  selector: 'app-projects',
  template: `
  <div class="min-h-screen h-full mb-2 overflow-y-scroll flex justify-center items-center py-20">
    <div class="w-full h-full md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
      <ng-container *ngFor="let project of projects">
        <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 class="mb-3 text-xl font-bold text-blue-700" [innerHTML]="project.projectName"></h3>
          <div class="relative">
            <ng-container *ngIf="project.image !== ''">
              <img class="w-full rounded-xl" [src]="project.image" [alt]="project.projectName" />
            </ng-container>
            <ng-container *ngIf="project.image === ''">
              <img class="w-full rounded-xl" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700697600&semt=sph" [alt]="project.projectName" />
            </ng-container>
            <p class="absolute top-0 bg-red-400 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg" [innerHTML]="'Level ' + project.level"></p>
          </div>
          <!-- https://res.cloudinary.com/ddigkgb9y/image/upload/v1696671785/20221120_120520_nll5gc.jpg -->
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p [innerText]="'Time Spent:  ' + project.duration + ' days'"></p>
            </div>
            <div class="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.9 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <p [innerText]="'Components: ' + project.components"></p>
            </div>
            <div class="flex space-x-1 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <p class="text-sm text-indigo-500 p-2">
                <u class="text-indigo-900 p-1">Tech Used:</u> [
                  <ng-container *ngFor="let item of project.tech; let i = index">
                    <ng-container *ngIf="i != 0">,</ng-container>
                    {{item}} 
                  </ng-container>
                  ]
              </p>
            </div>
            <button class="mt-4 text-xl w-full text-white bg-blue-700 py-2 rounded-xl shadow-lg">View Project</button>
          </div>
          <div *ngIf="!project.isComplete" class="absolute inset-0 bg-gray-800 opacity-80 rounded-xl"></div>
        </div>
      </ng-container>
    
    </div>
  </div>
  `,
  styles: [
    `
      button{
        transition: all 0.2s ease-in-out
      }

      button:hover{
          transform: scale(1.07);
      }
    `
  ]
})
export class ProjectsComponent {

  projects: Array<IProject> =[
    {
      projectName: 'portfolio',
      image: '/assets/images/portfolio.png',
      level: 1,
      duration: 3,
      components: 11,
      tech: ['Angular', 'TailwindCss', 'TypeScript'],
      isComplete: true
    },
    {
      projectName: 'landing page',
      image: '',
      level: 1,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
    {
      projectName: 'calculator',
      image: '',
      level: 1,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
    {
      projectName: 'job board',
      image: '',
      level: 2,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
    {
      projectName: 'online quiz maker',
      image: '',
      level: 2,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
    {
      projectName: 'e-commerce website',
      image: '',
      level: 3,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
    {
      projectName: 'project management tool',
      image: '',
      level: 3,
      duration: 0,
      components: 0,
      tech: [],
      isComplete: false
    },
  ];

  constructor() {}
}
