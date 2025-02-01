import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheodenComponent } from './theoden.component';

describe('TheodenComponent', () => {
  let component: TheodenComponent;
  let fixture: ComponentFixture<TheodenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheodenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
