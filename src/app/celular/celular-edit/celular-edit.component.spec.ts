import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularEditComponent } from './celular-edit.component';

describe('CelularEditComponent', () => {
  let component: CelularEditComponent;
  let fixture: ComponentFixture<CelularEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelularEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CelularEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
