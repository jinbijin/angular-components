import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as expect from 'expect';
import { AngularAspectsComponent } from './angular-aspects.component';

describe('AngularAspectsComponent', () => {
  let component: AngularAspectsComponent;
  let fixture: ComponentFixture<AngularAspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularAspectsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
