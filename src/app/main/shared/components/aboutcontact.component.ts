import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutcontact',
  template: `
    <div
      class="my-after w-full h-full flex justify-center items-center flex-col "
    >
      <h4 class="px-2 text-xl font-bold text-blue-400 relative right-64">
        <u>General Information</u>
      </h4>
      <div
        class="w-full h-5/6 px-10 py-4 flex justify-center items-center flex-col"
      >
        <div class="grid grid-cols-2 gap-4 px-2 w-full">
          <ng-container *ngFor="let info of myInfo">
            <div class="flex flex-col items-start justify-center rounded-md bg-white shadow-md px-3 py-4">
              <p class="text-md text-blue-400" [innerHTML]="info.heading | titlecase"></p>
              <p class="text-sm text-blue-300" [innerHTML]="info.content | titlecase"></p>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .my-after::before{
        content: '';
        position: relative;
        width: 3rem;
        height: 3rem;
        top: 27.3rem;
        border-bottom: 5px solid lightblue;
        border-right: 5px solid lightblue;
        border-radius: 5px;
        left: 49%;
      }

      .my-after::after{
        content: '';
        position: relative;
        width: 3rem;
        height: 3rem;
        bottom: 25.3rem;
        border-top: 5px solid lightblue;
        border-left: 5px solid lightblue;
        border-radius: 5px;
        right: 49%;
      }
    `
  ]
})
export class AboutcontactComponent {

  myInfo: Array<any> =[
    {
      heading: 'full names',
      content: 'mbuelo maranda'
    },
    {
      heading: 'age',
      content: '19 years old'
    },
    {
      heading: 'area of interest',
      content: 'front end: angular / react <br> back end: C#, ASP.Net'
    },
    {
      heading: 'Educational background',
      content: 'self taught'
    },
    {
      heading: 'notice period',
      content: 'earliest 	convenience'
    },
    {
      heading: 'experience',
      content: 'current: codsoft intern'
    },
  ]

  constructor(){}
}
