import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <section class="w-full p-6 rounded-lg max-w-2xl shadow-lg shadow-gray-300 bg-white">
      <header class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 shrink-0 w-6 h-6 text-blue-700"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 19l16 0"></path>
          <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
        </svg>
        <h3 class="font-medium text-lg">How I Rate My Skills</h3>
      </header>
        <section class="py-4 grid grid-cols-2 gap-x-6">
          <!-- Use *ngFor to iterate over your skills array -->
          <div *ngFor="let skill of skills" class="flex items-center py-3 border-t border-gray-100">
            <span class="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <div class="space-y-3 flex-1">
              <div class="flex items-center">
                <h4 class="font-medium text-sm mr-auto text-gray-700 flex items-center">
                  {{ skill.name }}
                  
                </h4>
                <span [ngClass]="{'bg-red-500': skill.rating <= 4, 'bg-yellow-400': skill.rating > 4 && skill.rating < 7, 'bg-green-600': skill.rating >= 7}"
                  class="px-2 py-1 rounded-lg text-blue-800 text-xs">
                  {{ skill.rating }}/10
                </span>
              </div>
              <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                <span
                  class="h-full bg-blue-500 w-full block rounded-full"
                  [style.width.%]="skill.rating * 10"
                ></span>
              </div>
            </div>
          </div>
        </section>
        <footer class="pt-4 border-t border-gray-100">
          <p class="text-sm text-center text-gray-500">
            Like My <a href="https://github.com/Maranda-Mbuelo" class="font-bold">Github</a> Repo If You Agree!
          </p>
        </footer>
      </section>
    </div>
  `,
  styles: [
  ],
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', rating: 7.3 },
    { name: 'Typescript', rating: 6.8 },
    { name: 'C# (OOP)', rating: 6.7 },
    { name: 'ASP .Net, Web API, MVC Structure', rating: 6.4 },
    { name: 'TailwindCss', rating: 8 },
    { name: 'Bootstrap', rating: 6 },
    { name: 'SQL', rating: 5 },
    { name: 'Firebase', rating: 4 },
  ];
}
