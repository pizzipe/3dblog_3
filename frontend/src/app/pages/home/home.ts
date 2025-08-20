import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directus } from '../../services/directus/directus';
import { Intro } from '../../components/intro/intro';
import { AboutPreview } from '../../components/about-preview/about-preview';
import { Footer } from '../../components/footer/footer';
import { ArticlePreview } from '../../components/article-preview/article-preview';
import { ArticleTitlePreview } from '../../components/article-title-preview/article-title-preview';
import { ArticleDto } from '../../dtos/article-dto';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Intro, ArticleTitlePreview, AboutPreview, Footer, ArticlePreview],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  articles: ArticleDto[] | undefined;


  constructor(private service: Directus) {}


  async ngOnInit() {
    try {
      this.articles = await this.service.getArticles();
      console.log('All articles data:', this.articles);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
}
