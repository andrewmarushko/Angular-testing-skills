import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingEditComponent } from './shooping-edit.component';

describe('ShoopingEditComponent', () => {
  let component: ShoopingEditComponent;
  let fixture: ComponentFixture<ShoopingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
