import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="w-full h-screen flex justify-center items-center">
      <div class="my-background w-4/5 min-h-4/6 h-auto shadow-md rounded-md  flex justify-center items-center flex-col">
        <div class="z-10 w-full h-full flex flex-col items-center justify-center">
          <ng-container *ngIf="buttons[0].isActive; else personalInfo">
            <app-aboutmini class="p-0 w-full h-full"></app-aboutmini>
          </ng-container>

          <ng-template #personalInfo>
            <ng-container *ngIf="buttons[1].isActive; else contact">
              <app-aboutcontact class="p-0 w-full h-full"></app-aboutcontact>
            </ng-container>

            <ng-template #contact>
              <app-aboutpersonal class="p-0 w-full h-full"></app-aboutpersonal>
            </ng-template>
          </ng-template>

        </div>

        <div class="z-10 w-1/2 shadow-md h-8 flex justify-evenly items-center gap-1 rounded-md overflow-hidden">
          <ng-container *ngFor="let button of buttons">
            <button class="border shadow-md rounded-sm p-1 w-full active:bg-sky-700 hover:text-pink-600 material-icons"
              [ngClass]="{'bg-red-400' : button.isActive, 'bg-gray-200' : !button.isActive}"
              [innerHTML]="button.icon"
              (click)="deActivate(button.name)"  
            ></button>
          </ng-container>
        </div>
      </div>
    </div>
    <!--  background: #ec1839; -->
  `,
  styles: [
    `
      .my-background{
        background: #fdf9ff;
      }

      button{
        
        transition: all 0.3s ease-in-out;
      }

      button:hover{
        transform: scale(1.07);
      }

      button:active{
        transform: scale(1.07);
      }

      
    `
  ]
})
export class AboutComponent implements OnInit {
  buttons: any[] = [
    {
      icon: `<span class="material-symbols-outlined">workspaces</span>`,
      action: '',
      link: '',
      name: 'about',
      isActive: false
    },
    {
      icon: `<span class="material-symbols-outlined">hub</span>`,
      action: '',
      link: '',
      name: 'contact',
      isActive: false
    },
    {
      icon: `<span class="material-symbols-outlined">celebration</span>`,
      action: '',
      link: '',
      name: 'birthInfo',
      isActive: false
    },
  ]

  constructor(){}

  ngOnInit(): void {
    this.buttons[0].isActive = true;
  }

  deActivate(name: string): void {
    this.buttons.forEach((button) => {
        button.isActive = (button.name === name);
        console.log(`Button ${button.name} is now ${button.isActive ? 'active' : 'inactive'}.`);
    });
}


}
