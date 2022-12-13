import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddQuestionModalComponent } from '@components/add-question-modal/add-question-modal.component';


const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const entryCommonComponents = [
    AddQuestionModalComponent
]


@NgModule({
  exports: [
    ...sharedModules,
    ...entryCommonComponents
  ],
  declarations: [
    ...entryCommonComponents
  ],
  imports: [
    ...sharedModules
  ]
})
export class SharedModule { }
