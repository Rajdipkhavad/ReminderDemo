import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderAddEditDilogueComponent } from './reminder-add-edit-dilogue.component';

describe('ReminderAddEditDilogueComponent', () => {
  let component: ReminderAddEditDilogueComponent;
  let fixture: ComponentFixture<ReminderAddEditDilogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderAddEditDilogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderAddEditDilogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
