import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../models/Project';
import { Tag } from '../models/Tags';
@Component({
  selector: 'app-portfolio',
  imports: [
    ProjectCard
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  projects: Project[] = [{
    id: 0,
    name: 'Portfolio Project',
    summary: 'This is a brief summary of the portfolio project.',
    description: 'This is a detailed description of the portfolio project, explaining its features and technologies used.',
    images: ['/assets/sample1.png', '/assets/sample2.png'],
    link: 'https://example.com/portfolio-project',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]
  },{
    id: 1,
    name: 'Sales Management System',
    summary: 'This is a brief summary of the sales management system.',
    description: 'This is a detailed description of the sales management system, explaining its features and technologies used.',
    images: ['/assets/sample3.png', '/assets/sample4.png'],
    link: 'https://example.com/sales-management',
    tags: [Tag.STREAMLIT, Tag.PYTHON, Tag.MYSQL]
  },
  {
    id: 2,
    name: 'Cinema Reservation System',
    summary: 'This is a brief summary of the cinema reservation system.',
    description: 'This is a detailed description of the cinema reservation system, explaining its features and technologies used.',
    images: ['/assets/sample5.png', '/assets/sample6.png'],
    link: 'https://example.com/cinema-reservation',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]
  },
  {
    id: 3,
    name: 'Replicated Key/Value Service',
    summary: 'This is a brief summary of the replicated key/value service.',
    description: 'This is a detailed description of the replicated key/value service, explaining its features and technologies used.',
    images: ['/assets/sample7.png', '/assets/sample8.png'],
    link: 'https://example.com/e-commerce',
    tags: [Tag.GO]
  },
  {
    id: 4,
    name: 'Dictionary App',
    summary: 'This is a brief summary of the dictionary app.',
    description: 'This is a detailed description of the dictionary app, explaining its features and technologies used.',
    images: ['/assets/sample9.png', '/assets/sample10.png'],
    link: 'https://example.com/dictionary-app',
    tags: [Tag.C]
  },
  {
    id: 5,
    name: 'UDP over TCP simulation',
    summary: 'This is a brief summary of the UDP over TCP simulation.',
    description: 'This is a detailed description of the UDP over TCP simulation, explaining its features and technologies used.',
    images: ['/assets/sample11.png', '/assets/sample12.png'],
    link: 'https://example.com/udp-over-tcp',
    tags: [Tag.PYTHON]
  }

];

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Yamen - Portfolio');
  }
}
