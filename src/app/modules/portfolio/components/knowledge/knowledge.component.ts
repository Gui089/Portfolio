import { Component, signal } from '@angular/core';
import { Knowledge } from '../../interface/Knowledgeinterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledgeComponent = signal<Knowledge[]>([
    {
      src:'assets/icons/knowledge/angular.svg',
      alt:'logo angular'
    },
    {
      src:'assets/icons/knowledge/aws.svg',
      alt:'logo aws'
    },
    {
      src:'assets/icons/knowledge/banco.svg',
      alt:'logo banco'
    },
    {
      src:'assets/icons/knowledge/node.svg',
      alt:'logo node'
    },
    {
      src:'assets/icons/knowledge/react.svg',
      alt:'logo react'
    }
  ])
}
