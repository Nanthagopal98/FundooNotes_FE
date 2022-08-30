import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievComponent } from './archiev.component';

describe('ArchievComponent', () => {
  let component: ArchievComponent;
  let fixture: ComponentFixture<ArchievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
