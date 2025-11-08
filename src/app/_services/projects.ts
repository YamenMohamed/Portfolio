import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tags';
@Injectable({
  providedIn: 'root',
})
export class Projects {

  
  projects: Project[] = [
    {id: 0,name: 'Portfolio Project',summary: 'This is a brief summary of the portfolio project.',description: 'Yep, this is the one you’re currently on.',images: ['/dog.png'],link: 'https://github.com/YamenMohamed/Portfolio',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP]},
  {id: 1,name: 'Sales Management System',summary: 'A full-stack Sales Management System built with FastAPI, Streamlit, and MySQL, designed to manage users, products, orders, and analytics efficiently.',description: 'This project allows admins and users to manage sales data with proper access control and data validation. It demonstrates key backend and frontend integration concepts, authentication, and database consistency through triggers and constraints.',images: ['/Sales-Management/img_1.png', '/Sales-Management/img_2.png', '/Sales-Management/img_3.png', '/Sales-Management/img_4.png', '/Sales-Management/img_5.png', '/Sales-Management/img_6.png', '/Sales-Management/img_7.png', '/Sales-Management/img_8.png', '/Sales-Management/img_9.png', '/Sales-Management/img_10.png', '/Sales-Management/img_11.png', '/Sales-Management/img_12.png', '/Sales-Management/img_13.png','/Sales-Management/img_14.png'],link: 'https://github.com/YamenMohamed/Sales-Managment-System',tags: [Tag.STREAMLIT, Tag.PYTHON, Tag.MYSQL,Tag.DOCKER]},
    {id: 2,name: 'Cinema Reservation System',summary: 'A cinema reservation system that allow users to login, show movies and book a cinema seat implemented using Angular v17.',description: 'This is the frontend of a Cinema Reservation System, built using Angular 17 and fully integrated with a backend RESTful API. The application allows users to view available movies and their detials, view showtimes, register/login, and reserve seats.',images: ['/Cinema-Reservation/img_1.png','/Cinema-Reservation/img_2.png','/Cinema-Reservation/img_3.jpeg','/Cinema-Reservation/img_4.png' ],link: 'https://github.com/YamenMohamed/Cinema-Reservation-System',tags: [Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 3,name: 'Replicated Key/Value Service',summary: 'This project implements a simple fault-tolerant key-value service.',description: 'This project implements a simple fault-tolerant key-value service using a primary/backup replication model. It demonstrates core concepts of replication, consistency, and reliability in distributed systems.',images: ['/Replicated-key/img_1.png','/Replicated-key/img_2.png','/Replicated-key/img_3.png','/Replicated-key/img_4.png'],link: 'https://example.com/e-commerce',tags: [Tag.GO,Tag.RPC]},
    {id: 4,name: 'Dictionary App',summary: 'This is a brief summary of the dictionary app.',description: 'This is a detailed description of the dictionary app, explaining its features and technologies used.',images: ['/assets/sample9.png', '/assets/sample10.png'],link: 'https://example.com/dictionary-app',tags: [Tag.C]},
    {id: 5,name: 'UDP over TCP simulation',summary: 'This is a brief summary of the UDP over TCP simulation.',description: 'This is a detailed description of the UDP over TCP simulation, explaining its features and technologies used.',images: ['/assets/sample11.png', '/assets/sample12.png'],link: 'https://example.com/udp-over-tcp',tags: [Tag.PYTHON]}
];
  constructor() {}

  GetProjects(): Project[] {
    return this.projects;
  }

  GetProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
