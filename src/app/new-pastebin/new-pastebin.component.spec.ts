import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPastebinComponent } from './new-pastebin.component';

describe('PastebinComponent', () => {
  let component: NewPastebinComponent;
  let fixture: ComponentFixture<NewPastebinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPastebinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPastebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
