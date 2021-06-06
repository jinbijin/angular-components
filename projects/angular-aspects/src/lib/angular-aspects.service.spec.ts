import { TestBed } from '@angular/core/testing';
import * as expect from 'expect';
import { AngularAspectsService } from './angular-aspects.service';

describe('AngularAspectsService', () => {
  let service: AngularAspectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAspectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
