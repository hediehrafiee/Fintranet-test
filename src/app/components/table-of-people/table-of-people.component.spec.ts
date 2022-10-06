import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfPeopleComponent } from './table-of-people.component';

describe('TableOfPeopleComponent', () => {
  let component: TableOfPeopleComponent;
  let fixture: ComponentFixture<TableOfPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
