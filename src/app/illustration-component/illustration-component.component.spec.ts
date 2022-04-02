import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationComponentComponent } from './illustration-component.component';

describe('IllustrationComponentComponent', () => {
  let component: IllustrationComponentComponent;
  let fixture: ComponentFixture<IllustrationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustrationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
