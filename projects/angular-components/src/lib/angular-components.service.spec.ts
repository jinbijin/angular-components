import { TestBed } from '@angular/core/testing';
import * as expect from 'expect';
import { AngularComponentsService } from './angular-components.service';

describe('AngularComponentsService', () => {
  let service: AngularComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
