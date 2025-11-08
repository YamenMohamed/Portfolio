import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // use the public copy (public/ is copied to build root) so the image is available at /img.jpeg
  img_link = '/img.jpeg';
  constructor(private titleService: Title) { 
    this.titleService.setTitle('Yamen - Home');
}
}