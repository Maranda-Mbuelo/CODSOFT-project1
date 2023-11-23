import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="w-full min-w-full min-h-full h-full flex justify-center items-center font-sans">
      <div class="w-3/5 h-3/5 p-4 flex justify-center items-start flex-col">
          <h3 class="text-4xl shadow-md rounded-md px-1">Hi y'all, I'm <span class="name">Mbuelo Maranda</span> </h3>
          <h3 class="my-profession text-1xl shadow-md rounded-md px-1">I' m a <span class="typing">Software developer</span></h3>
          <p class="p-3 shadow-md rounded-md">I am currently doing internship at CodSoft. My expertise is to design, create and also maintain software. <br> Feel free to contact me and ask all you need to know about me. </p>
          <a href="/MbueloMaranda/AtCodSoft/ContactMe" class="btn hire-me inline-block text-white rounded-md mt-2">Hire Me</a>
      </div>
      <div class="w-3/5 min-h-3/5 h-3/5 overflow-hidden relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="shadow-md" style="position: absolute; top: 3%; left: -3%; z-index: 1; transform: scale(1.4);">
              <path fill="#FF0066" d="M45.8,-22C50.9,0.8,40.7,21.4,22,36.4C3.4,51.4,-23.8,60.7,-37.3,51C-50.8,41.2,-50.8,12.4,-42.3,-15.1C-33.8,-42.5,-16.9,-68.6,1.7,-69.2C20.4,-69.8,40.7,-44.8,45.8,-22Z" transform="translate(100 100)" />
          </svg>
          <img src="/assets/images/removebg-preview.png" alt="mbuelo" 
            class="w-full relative top-2/4" style="position: relative; z-index: 2;">
      </div>

    </div>
  `,
  styles: [
    `
      h3.hello span{
          font-family: cursive;
          font-size: 30px;
          font-weight: 700;
      }

      h3.my-profession{
          font-size: 30px;
          margin: 0  0 15px 0;
      }

      .btn{
          font-size: 16px;
          font-weight: 500;
          padding: 12px 35px;
          white-space: nowrap;
          background: #ec1839;
          transition: all 0.3s ease-in-out;
      }

      .btn:hover{
          transform: scale(1.07);
      }

      .home-info p{
        font-size: 20px;
        color: #504e70;
        margin-bottom: 25px;
    }
    `
  ]
})
export class HomeComponent {

}
