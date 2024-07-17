import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebinComponent } from './createbin.component';

describe('CreatebinComponent', () => {
  let component: CreatebinComponent;
  let fixture: ComponentFixture<CreatebinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
