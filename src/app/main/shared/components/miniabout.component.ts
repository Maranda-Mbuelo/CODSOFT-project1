import { Component } from '@angular/core';

@Component({
  selector: 'app-miniabout',
  template: `
    <div class="flex flex-col justify-center items-center h-full w-full">
            <div class="relative flex flex-col items-center rounded-[20px] w-full max-w-full bg-clip-border shadow-3xl shadow-shadow-500 p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700">
                      General Information
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-600">
                      As we live, our hearts turn colder. Cause pain is what we go through
                      as we become older. We get insulted by others, lose trust for those
                      others. We get back stabbed by friends. It becomes harder for us to
                      give others a hand. We get our heart broken by people we love, even
                      that we give them all...
                    </p>
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Education</p>
                    <p class="text-base font-medium text-navy-700">
                        Stanford University
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Languages</p>
                    <p class="text-base font-medium text-navy-700">
                        English, Spanish, Italian
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Department</p>
                    <p class="text-base font-medium text-navy-700">
                        C# Design
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Work History</p>
                    <p class="text-base font-medium text-navy-70">
                        English, Sepedi, Tshivenda
                    </p>
                    </div>

                    <div class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Organization</p>
                    <p class="text-base font-medium text-navy-700">
                        Simmmple Web LLC
                    </p>
                    </div>

                    <div class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
                    <p class="text-sm text-gray-600">Birthday</p>
                    <p class="text-base font-medium text-navy-700">
                        20 July 1986
                    </p>
                    </div>
                </div>
            </div>  
            <p class="font-normal text-navy-700 mt-20 mx-auto w-max">Profile Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" class="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>
  `,
  styles: [
  ]
})
export class MiniaboutComponent {

}