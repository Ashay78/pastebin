import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPastebinComponent } from './get-pastebin.component';

describe('GetPastebinComponent', () => {
  let component: GetPastebinComponent;
  let fixture: ComponentFixture<GetPastebinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPastebinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPastebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
