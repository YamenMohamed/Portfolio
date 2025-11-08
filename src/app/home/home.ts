import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../_services/projects';
import { Project } from '../models/Project';
import { CarouselComponent, SlideComponent } from "ngx-bootstrap/carousel";
@Component({
  selector: 'app-home',
  imports: [CarouselComponent, SlideComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // use the public copy (public/ is copied to build root) so the image is available at /img.jpeg
  img_link = '/img.jpeg';
  featured_project: Project | undefined;
  constructor(private titleService: Title,private projectsService: Projects) { 
    this.titleService.setTitle('Yamen - Home');
}
  ngOnInit(): void {
    this.featured_project = this.projectsService.GetProjectById(1);
  }

}