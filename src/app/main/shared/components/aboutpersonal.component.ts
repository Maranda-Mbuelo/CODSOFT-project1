import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutpersonal',
  template: `
    <div
      class="my-after w-full h-full flex justify-center items-center flex-col "
    >
      <h4 class="px-2 text-xl font-bold text-cyan-700 relative right-64">
        <u>My Programming Stack</u>
      </h4>
      <div
        class="w-full h-5/6 px-10 py-4 flex justify-center items-center flex-col"
      >
        <div
          class="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-md border-[1px] border-gray-200 bg-gray-200 bg-clip-border shadow-md"
        >
          <div
            class="flex h-fit w-full items-center justify-between px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none"
          >
            <h4 class="text-lg font-bold text-gray-500">
              Top Languages and Frameworks
            </h4>
            <a href="https://github.com/Maranda-Mbuelo"
              class="linear rounded-md px-4 py-2 text-base font-medium text-brand-500 transition duration-200 text-white hover:bg-red-700 bg-red-500"
            >
              See My Github
            </a>
          </div>
          <div class="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
            <table role="table" class="w-full min-w-[500px] overflow-x-scroll">
              <thead>
                <tr role="row">
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="cursor: pointer"
                  >
                    <div
                      class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                    >
                      Lang/framework
                    </div>
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="cursor: pointer"
                  >
                    <div class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Projects done
                    </div>
                  </th>
                  <th
                    colspan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style="cursor: pointer"
                  >
                    <div
                      class="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                    >
                      Rating
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" class="px-4">
                <ng-container *ngFor="let language of languages">
                  <tr role="row">
                    <td class="py-3 text-sm" role="cell">
                      <div class="flex items-center gap-2">
                        <div class="h-[30px] w-[30px] rounded-full">
                          <img
                            [src]="language.icon"
                            class="h-full w-full rounded-full"
                            alt=""/>
                        </div>
                        <p class="text-sm font-medium text-gray-700" [innerHTML]="language.name"></p>
                      </div>
                    </td>
                    <td class="py-3 text-sm" role="cell">
                      <p class="text-md font-medium text-gray-600" [innerHTML]="language.projects">
                      </p>
                    </td>
                    <td class="py-3 text-sm" role="cell">
                      <div class="mx-2 flex font-bold">
                        <div class="h-2 w-24 rounded-full bg-gray-400">
                          <div
                            class="flex h-full items-center justify-center rounded-md bg-red-500"
                            [ngClass]="language.rating"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </ng-container>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .my-after::before {
        content: '';
        position: relative;
        width: 3rem;
        height: 3rem;
        top: 36.7rem;
        border-bottom: 5px solid gray;
        border-right: 5px solid gray;
        border-radius: 5px;
        left: 49%;
      }

      .my-after::after {
        content: '';
        position: relative;
        width: 3rem;
        height: 3rem;
        bottom: 34.7rem;
        border-top: 5px solid gray;
        border-left: 5px solid gray;
        border-radius: 5px;
        right: 49%;
      }

      ::-webkit-scrollbar{
          width: 5px;
          height: auto;
          background-color: #504e70;
          border-radius: 15px;
      }
    `,
  ],
})
export class AboutpersonalComponent {
  
  languages: Array<any> = [
    {
      name: 'C#',
      icon: `https://w7.pngwing.com/pngs/83/268/png-transparent-csharp-line-logo-icon.png`,
      projects: 9,
      rating: 'w-[70%]'
    },
    {
      name: 'C# Asp .Net',
      icon: `https://w7.pngwing.com/pngs/713/310/png-transparent-net-mvc-logo-asp-net-mvc-logo-net-framework-model-view-controller-framework-text-logo-microsoft-azure.png`,
      projects: 7,
      rating: 'w-[60%]'
    },
    {
      name: 'Typescript',
      icon: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png`,
      projects: 10,
      rating: 'w-[90%]'
    },
    {
      name: 'Angular',
      icon: `https://w7.pngwing.com/pngs/983/866/png-transparent-angularjs-front-and-back-ends-dart-typescript-a-angle-text-rectangle-thumbnail.png`,
      projects: 10,
      rating: 'w-[80%]'
    },
    {
      name: 'SQL',
      icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6w4fPZHIm0JO7_egvfeiK1Ozd-kuexWsbSW6X4GDpQxlB9-m32P4-rZ7xh3CWZv0-2gI&usqp=CAU`,
      projects: 14,
      rating: 'w-[60%]'
    },
    {
      name: 'react',
      icon: `https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png`,
      projects: 2,
      rating: 'w-[30%]'
    },
    {
      name: 'HTML',
      icon: `data:image/png;base64,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`,
      projects: 23,
      rating: 'w-[95%]'
    },
    {
      name: 'CSS',
      icon: `https://w7.pngwing.com/pngs/458/222/png-transparent-css-logo-css-interface-website-isolated-logo-3d-icon-thumbnail.png`,
      projects: 33,
      rating: 'w-[90%]'
    },
    {
      name: 'TailwindCSS',
      icon: `data:image/jpeg;base64,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`,
      projects: 8,
      rating: 'w-[90%]'
    },
    {
      name: 'bootstrap',
      icon: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkobevyLVyUvfQgEsFFTO-viTQ8yX-wzKLhg&usqp=CAU`,
      projects: 3,
      rating: 'w-[90%]'
    },
    {
      name: 'C++',
      icon: `data:image/png;base64,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`,
      projects: 19,
      rating: 'w-[65%]'
    },
  ]

  constructor(){}

}
