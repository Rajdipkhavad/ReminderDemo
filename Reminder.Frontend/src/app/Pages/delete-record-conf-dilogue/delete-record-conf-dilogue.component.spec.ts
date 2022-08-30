import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecordConfDilogueComponent } from './delete-record-conf-dilogue.component';

describe('DeleteRecordConfDilogueComponent', () => {
  let component: DeleteRecordConfDilogueComponent;
  let fixture: ComponentFixture<DeleteRecordConfDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecordConfDilogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecordConfDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
