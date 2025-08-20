import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Directus } from '../../services/directus/directus';
import { ArticleDto } from '../../dtos/article-dto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article',
  imports: [CommonModule, Footer],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article implements OnInit {
  data : ArticleDto | undefined;
  htmlContent! : SafeHtml;
  imageUrl!: string;


  constructor(
    private route: ActivatedRoute,
    private service: Directus,
    private sanitizer: DomSanitizer
  ) {}


  async ngOnInit() {
    let articleId = '';
    this.route.params.subscribe(params => {
      articleId = params['url'];
    });

    try {
      this.data = await this.service.getArticle(articleId);
      console.log('article: ', this.data);

      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
      this.imageUrl = `${environment.apiUrl}/assets/${this.data?.image}`;
    } catch (error) {
      console.error('Error loading data: ', error);
    }
  }
}
