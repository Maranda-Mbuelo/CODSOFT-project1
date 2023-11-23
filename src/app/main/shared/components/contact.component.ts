import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="h-full flex items-center justify-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-indigo-500">Contact Me</h1>
        <p class="mt-4 text-lg md:text-xl text-indigo-400">Feel free to reach out to me using the contact information links below. <br> You can simply click on them</p>
      </div>
      <div class="mt-12 space-y-4">
        <div class="flex items-center space-x-4">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <i class="fa-solid fa-phone" style="color: orange;"></i> <a href="tel:+27787722573" class="text-lg text-gray-400 hover:text-indigo-300">+27 787 722 573</a>
        </div>
        
        <div class="flex items-center space-x-4">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <i class="fa-brands fa-whatsapp" style="color: orange;"></i>
          <a href="https://api.whatsapp.com/send?phone=27673866562&text=Hello%20there,%20I%20want%20to%20get%20in%20touch%20with%20you!" class="text-lg text-gray-500 hover:text-indigo-300">+27 673 866 562</a>
        </div>
        
        <div class="flex items-center space-x-4">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <i class="fa-solid fa-envelope" style="color: orange;"></i> <a href="mailto:marandambuelo3@gmail.com" class="text-lg text-gray-600 hover:text-indigo-300">marandambuelo3@gmail.com</a>
        </div>

        <div class="flex items-center space-x-4 mt-4">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <a href="https://mbuelo-maranda.web.app/assets/Mbuelo%20Maranda_CV.pdf" download class="text-lg text-gray-400 hover:text-indigo-500">Click To Download My CV</a>
        </div>

      </div>
      <div class="mt-12 flex justify-center">
        <a href="https://mbuelo-maranda.web.app/mbuelo-maranda/contactForm" class="flex items-center space-x-2 bg-indigo-600 text-white font-medium rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-indigo-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span> <i class="fa-solid fa-message" style="color: orange"></i>   Leave a Message</span>
          </a>
          
      </div>
    </div>
    
  
    
  </section>
  `,
  styles: [
  ]
})
export class ContactComponent {

  constructor(private location: Location){}

  goBack() {
    this.location.back();
  }
}
