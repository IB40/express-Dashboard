import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationArticleComponent } from './modification-article.component';

describe('ModificationArticleComponent', () => {
  let component: ModificationArticleComponent;
  let fixture: ComponentFixture<ModificationArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
