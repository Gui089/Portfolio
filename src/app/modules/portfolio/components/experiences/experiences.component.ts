import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiencesComponent = signal([
    {
      summary: {
        strong:"Full Stack Developer",
        p:"Fuvir | Out 2023 - Present",
      },
      text:"<p>Atuo com tecnologias como React, Nextjs, NestJs, NodeJs, MySQL, MariaDB e AWS, atuo em um sistema robusto com integrações entre Back-end e Front-end e com a utilização de microserviços</p>"
    },
    {
      summary: {
        strong:"Instrutor de Javascript no YouTube",
        p:"Canal print(gui) no YouTube | Dez 2023 - Present",
      },
      text:"<p>Ensino desde o básico ao avançado de Javascript no meu canal do YouTube, e também utilizo projetos práticos nas aulas"
    }
  ]);
}
