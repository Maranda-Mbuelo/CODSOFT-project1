import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative bg-gray-900 text-white pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              Find me on any of these platforms below.
            </h5>
            <div class="flex">
              <a href="" class="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
              </a>
              <a href="https://web.facebook.com/mbuelo.maranda.1/?_rdc=1&_rdr" class="bg-white shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"/></svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=27673866562&text=Hello%20there,%20I%20want%20to%20get%20in%20touch%20with%20you!" class="bg-white shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>
              <a href="https://github.com/Maranda-Mbuelo" class="bg-white shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </a>
              <a href="https://za.linkedin.com/in/maranda-marvin-592a42233" class="bg-white shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a href="tel:+27787722573" class="bg-white shadow-lg font-normal h-10 w-10 items-center flex justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <svg style="fill: indigo;" class="text-blue-400 text-[1.3rem]" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-sm font-semibold mb-2">Useful Links</span>
                <ul class="list-unstyled text-gray-400">
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="MbueloMaranda/AtCodSoft/AboutMe">About Me</a>
                  </li>
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="https://github.com/Maranda-Mbuelo">Github</a>
                  </li>
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="https://mbuelo-maranda.web.app/mbuelo-maranda/contactForm">Send Me Message</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul class="list-unstyled text-gray-400">
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="MbueloMaranda/AtCodSoft/Skills">My Skills</a>
                  </li>
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="https://mbuelo-maranda.web.app/mbuelo-maranda/timeline">My Self-Learning Journey</a>
                  </li>
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="https://www.youtube.com/c/giraffeacademy">My YouTube Educator</a>
                  </li>
                  <li>
                    <a class="font-semibold block pb-2 text-sm" href="">See My Programming Certificates</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6">
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm font-semibold py-1">
              Copyright © <span >2023</span><a href="https://mbuelo-maranda.web.app" class="hover:text-gray-800" target="_blank"> CodSoft Portfolio By </a>
              <a href="https://mbuelo-maranda.web.app" class="text-yellow-300 hover:text-red-400">Mbuelo Maranda</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>

  `,
  styles: [
  ]
})
export class FooterComponent {

}
