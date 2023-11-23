import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutmini',
  template: `
    <div
      class="my-after w-full h-full flex justify-center items-center flex-col "
    >
      <h4 class="px-2 text-xl font-bold text-navy-700 relative right-64">
        <u class="text-red-600">My Story</u>
      </h4>
      <div
        class="w-full h-5/6 px-10 py-4 flex justify-center items-center flex-col"
      >
        <div class="px-2 w-full">
          <div class="flex items-center justify-center rounded-md bg-white shadow-md px-3 py-4 w-full">
            <p class="text-base font-medium text-navy-700 w-full">
              I am a 19 years old self taught C# and Angular programmer who's  actively searching 	for internship opportunities or programming-related jobs. My goal is to become 	financially independent and secure my daily bread. I consider myself a 	straightforward and fun-loving person, albeit sometimes introverted depending on 	the company I keep. I believe in the power of effective communication and enjoy 	engaging with others.
                <br>
              My superpower is self-motivation. I derive my strength and drive from within, 	finding inspiration in simple things like my favorite dog breeds, my preferred car 	brand, and the happiness they bring. I've realized that these everyday elements 	have the power to uplift and motivate me more effectively than external influences. 	Witnessing success stories, even from individuals I don't know personally, fuels a 	burning desire within me to work harder and strive for positive change in my life
            </p>
          </div>
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
        top: 26.7rem;
        border-bottom: 5px solid red;
        border-right: 5px solid red;
        border-radius: 5px;
        left: 49%;
      }

      .my-after::after{
        content: '';
        position: relative;
        width: 3rem;
        height: 3rem;
        bottom: 24.7rem;
        border-top: 5px solid red;
        border-left: 5px solid red;
        border-radius: 5px;
        right: 49%;
      }
    `
  ],
})
export class AboutminiComponent {}
