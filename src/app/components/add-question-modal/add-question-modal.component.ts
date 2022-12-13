import { QuestionTypeLabelEnum } from './../../shared/enumrations/type-question-enums.model';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionTypeEnum } from '@shared/enumrations';
import { MAX_LENGTH_CONTENT } from 'src/app/configs/constants';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {

  event: EventEmitter<any> = new EventEmitter();
  editForm = this._fb.group({
    questionType: [QuestionTypeEnum.CHECKBOX, [Validators.required]],
    questionContent: [null, [Validators.required]],
    childrenAnswers: new FormArray([]),
    allowOtherAnswer: [false],
    required: [false]
  });
  listQuestionType: any[] = [
    {
      id: QuestionTypeEnum.CHECKBOX,
      label: QuestionTypeLabelEnum.CHECKBOX
    },
    {
      id: QuestionTypeEnum.PARAGRAPH,
      label: QuestionTypeLabelEnum.PARAGRAPH
    }
  ];
  questionTypeEnum = QuestionTypeEnum;
  maxLengthContent = MAX_LENGTH_CONTENT;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.addOption();
  }

  hideModal(event?: any) {
    this.event.emit(event);
  }

  createOption(): FormGroup {
    return this._fb.group({
      content: [null, [Validators.required]]
    });
  }

  addOption(): void {
   (this.editForm.get('childrenAnswers') as FormArray).push(this.createOption());
  }

  renderAddMoreButton(): boolean {
    // return this.editForm.get('allowOtherAnswer')?.value
    // ? (this.editForm.get('childrenAnswers') as FormArray)?.length < 4
    // : (this.editForm.get('childrenAnswers') as FormArray)?.length < 5
    return (this.editForm.get('childrenAnswers') as FormArray)?.length < 4;
  }
}
