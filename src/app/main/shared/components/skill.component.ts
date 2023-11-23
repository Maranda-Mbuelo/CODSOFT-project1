import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <main class="grid w-full min-h-screen  place-content-center">
      <section class="p-6 space-y-6 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
        <div class="grid grid-cols-2 gap-6">
          <button *ngFor="let skill of skills" [innerText]="skill.title"
                  class="px-4 py-2 text-xl text-gray-100 transition bg-indigo-500 rounded-md min-h-14 h-auto w-44 hover:bg-indigo-600"
                  [class.font-bold]="currentSkill.title === skill.title"
                  (click)="setCurrentSkill(skill)"></button>
        </div>
        
        <div class="flex items-center justify-center">
          <svg class="transform -rotate-90 w-72 h-72">
            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent" class="text-gray-700" />
            <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                    [attr.stroke-dasharray]="getCircumference()"
                    [attr.stroke-dashoffset]="getCircumferenceOffset()"
                    class="text-indigo-500" />
          </svg>
          <div class="relative right-1/2 text-5xl text-indigo-500 flex flex-col justify-start items-center">
            <span [innerText]="currentSkill.percent + '%'"></span>
            <span class="text-sm text-indigo-500" [innerText]="currentSkill.title"></span>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [],
})
export class SkillComponent {
  skills = [
    { title: 'Angular', percent: '80' },
    { title: 'Typescript', percent: '70' },
    { title: 'Tailwind CSS', percent: '90' },
    { title: 'BootStrap', percent: '60' },
    { title: 'C#', percent: '70' },
    { title: '.Net Framework', percent: '80' },
    { title: 'SQL', percent: '65' },
    { title: 'Firebase', percent: '65' },
    { title: 'OOP', percent: '63' },
    { title: 'Ionic', percent: '44' },
    { title: 'Json Format', percent: '77' },
  ];

  currentSkill = { title: 'Angular', percent: '80' };

  setCurrentSkill(skill: any) {
    this.currentSkill = skill;
  }

  getCircumference(): string {
    return (2 * Math.PI * 120).toString();
  }

  getCircumferenceOffset(): string {
    return ((2 * Math.PI * 120) - (+this.currentSkill.percent / 100 * 2 * Math.PI * 120)).toString();
  }
}
