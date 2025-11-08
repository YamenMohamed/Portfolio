import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tags';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input() project = {} as Project;

}
