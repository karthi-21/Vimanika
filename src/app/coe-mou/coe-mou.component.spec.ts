import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeMouComponent } from './coe-mou.component';

describe('CoeMouComponent', () => {
  let component: CoeMouComponent;
  let fixture: ComponentFixture<CoeMouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoeMouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeMouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
