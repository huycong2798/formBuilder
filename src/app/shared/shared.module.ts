import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddQuestionModalComponent } from '@components/add-question-modal/add-question-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const entryCommonComponents = [
    AddQuestionModalComponent
]

const ngxModules: any[] = [
  ModalModule.forRoot()
]

@NgModule({
  exports: [
    ...sharedModules,
    ...entryCommonComponents,
    ...ngxModules
  ],
  declarations: [
    ...entryCommonComponents
  ],
  imports: [
    ...sharedModules,
    ...ngxModules
  ]
})
export class SharedModule { }
