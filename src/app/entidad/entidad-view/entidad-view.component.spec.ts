import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadViewComponent } from './entidad-view.component';

describe('EntidadViewComponent', () => {
  let component: EntidadViewComponent;
  let fixture: ComponentFixture<EntidadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntidadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
