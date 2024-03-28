import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsAloneComponent } from './posts-alone.component';

describe('PostsAloneComponent', () => {
  let component: PostsAloneComponent;
  let fixture: ComponentFixture<PostsAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsAloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
