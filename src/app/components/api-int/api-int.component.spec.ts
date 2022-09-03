import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntComponent } from './api-int.component';

describe('ApiIntComponent', () => {
  let component: ApiIntComponent;
  let fixture: ComponentFixture<ApiIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiIntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
