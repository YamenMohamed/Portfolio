import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../models/Project';
import { Tag } from '../models/Tags';
import { Projects } from '../_services/projects';
@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCard
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  projects ={} as Project[];
  constructor(private titleService: Title,private projectsService: Projects) { 
    this.titleService.setTitle('Yamen - Portfolio');
   }
    ngOnInit() {
      this.projects = this.projectsService.GetProjects();
    }
  }  