import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTitlePreview } from './article-title-preview';

describe('ArticleTitlePreview', () => {
  let component: ArticleTitlePreview;
  let fixture: ComponentFixture<ArticleTitlePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleTitlePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTitlePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
