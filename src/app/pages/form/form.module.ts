import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FormAnswersComponent } from './components/form-answers/form-answers.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormRoutingModule } from './form.routes';

const components = [
  FormBuilderComponent,
  FormAnswersComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
