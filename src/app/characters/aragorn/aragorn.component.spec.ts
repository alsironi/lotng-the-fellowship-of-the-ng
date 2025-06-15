import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AragornComponent } from './aragorn.component';

describe('AragornComponent', () => {
  let component: AragornComponent;
  let fixture: ComponentFixture<AragornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AragornComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AragornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
