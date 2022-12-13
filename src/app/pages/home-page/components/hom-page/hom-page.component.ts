import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddQuestionModalComponent } from '@components/add-question-modal/add-question-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hom-page',
  templateUrl: './hom-page.component.html',
  styleUrls: ['./hom-page.component.scss']
})
export class HomPageComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  constructor(private _modalService: BsModalService) { }

  ngOnInit(): void {
   // this.openModal();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  openModal(): void {
    const modalRef: BsModalRef =
    this._modalService.show(AddQuestionModalComponent, {
      class: 'modal-dialog-centered add-question-modal',
    });

    this.subscription = modalRef.content?.event?.subscribe((data: any) => {
      modalRef.hide();
    })
  }
}
