import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassegeComponent } from './massege.component';

describe('MassegeComponent', () => {
  let component: MassegeComponent;
  let fixture: ComponentFixture<MassegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
