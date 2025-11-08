import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tags';
import { Projects } from '../_services/projects';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LegacyBootstrapModule } from '../legacy-bootstrap.module';
import { CommonModule } from '@angular/common';
import { ProjectModal } from '../project-modal/project-modal';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, LegacyBootstrapModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {

  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor (private modalService: BsModalService) {

  }
  OpenProjectModal() {
    const modalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModal,modalOptions);
  }
}
