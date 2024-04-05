import { Component, inject, signal } from '@angular/core';

//material
import {MatDialogModule, MatDialog} from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enum/EDialogPanelClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { IProjects } from '../../interface/IProjectsinterface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjectsComponent = signal<IProjects[]>([
    {
      src:"assets/projects/viajouAnotou.png",
      alt:"projeto",
      title:"Viajou-Anotou",
      width:'120px',
      height:'78px',
      description:'Projeto feito em React, este projeto se trata de uma SPA, com conceitos de React-Router-Dom e as boas práticas do React.',
      links: [
        {
          name: 'Conheça o Viajou-Anotou',
          href:'https://viajou-anotou321.netlify.app/'
        }
      ]
    },
    {
      src:"assets/projects/meAvalia.png",
      alt:"projeto",
      title:"Me Avalia",
      width:'120px',
      height:'78px',
      description:'Projeto básico feito em React, nele utilizo boas práticas para tratar requests em Apis.',
      links: [
        {
          name: 'Conheça o Me Avalia',
          href:'https://euphonious-basbousa-219ad7.netlify.app/'
        }
      ]
    },
    {
      src:"assets/projects/nlwNotes.png",
      alt:"projeto",
      title:"nlw Notes",
      width:'120px',
      height:'78px',
      description:'Projeto feito em React, nele aplico conceitos de manipulação da API do browser para gravar audios para serem convertidos em notas.',
      links: [
        {
          name: 'Conheça o nlw Notes',
          href:'https://notes-expert.netlify.app/'
        }
      ]
    },
    {
      src:"assets/projects/quizGames.png",
      alt:"projeto",
      title:"Quiz dos videos-games",
      width:'120px',
      height:'78px',
      description:'Projeto feito em React, um quiz básico, porém nele aplico conceitos de tratamentos de erros e delays na aplicação.',
      links: [
        {
          name: 'Conheça o Quiz dos Games',
          href:'https://amazing-custard-bce79d.netlify.app/'
        }
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
