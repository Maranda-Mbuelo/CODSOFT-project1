import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <!-- <div class="w-full min-w-full min-h-screen h-screen bg-blue-300 flex justify-center items-center">
      Hello hi feom containser
    </div> -->
    <div class="w-full min-h-full h-full overflow-y-scroll select-none">
      <app-home></app-home>
      <app-about></app-about>
      <!-- <app-projects></app-projects> -->
      <app-skill></app-skill>
      <!-- <app-skills></app-skills> -->
    </div>
  `,
  styles: [
    `
      ::-webkit-scrollbar{
          width: 0px;
          background-color: #504e70;
          border-radius: 15px;
      }

      div{
        background-color: #f2f2fe;
        font-family: sans-serif;
      }
    `,
  ]
})
export class ContainerComponent {

}
