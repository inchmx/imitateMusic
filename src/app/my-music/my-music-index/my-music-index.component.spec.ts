import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMusicIndexComponent } from './my-music-index.component';

describe('MyMusicIndexComponent', () => {
  let component: MyMusicIndexComponent;
  let fixture: ComponentFixture<MyMusicIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMusicIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMusicIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
