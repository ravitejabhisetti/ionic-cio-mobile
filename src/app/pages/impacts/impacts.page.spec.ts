import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactsPage } from './impacts.page';

describe('ImpactsPage', () => {
  let component: ImpactsPage;
  let fixture: ComponentFixture<ImpactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
