import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadCreateComponent } from './entidad-create.component';

describe('EntidadCreateComponent', () => {
  let component: EntidadCreateComponent;
  let fixture: ComponentFixture<EntidadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntidadCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
