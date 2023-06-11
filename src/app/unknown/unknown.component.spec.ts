import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownComponent } from './unknown.component';

describe('UnknownComponent', () => {
  let component: UnknownComponent;
  let fixture: ComponentFixture<UnknownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnknownComponent]
    });
    fixture = TestBed.createComponent(UnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
