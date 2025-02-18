import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsMaterialComponent } from './forms-material.component';

describe('FormsMaterialComponent', () => {
  let component: FormsMaterialComponent;
  let fixture: ComponentFixture<FormsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsMaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
