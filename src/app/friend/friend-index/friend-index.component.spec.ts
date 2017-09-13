import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendIndexComponent } from './friend-index.component';

describe('FriendIndexComponent', () => {
  let component: FriendIndexComponent;
  let fixture: ComponentFixture<FriendIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
