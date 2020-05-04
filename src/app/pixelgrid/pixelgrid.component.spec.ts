import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelgridComponent } from './pixelgrid.component';

describe('PixelgridComponent', () => {
  let component: PixelgridComponent;
  let fixture: ComponentFixture<PixelgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
