import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Directus } from '../../services/directus/directus';
import { ArticleDto } from '../../dtos/article-dto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-preview',
  imports: [/*RouterOutlet, */RouterLink/*, RouterLinkActive*/],
  templateUrl: './article-preview.html',
  styleUrl: './article-preview.scss'
})
export class ArticlePreview implements OnInit {
  @Input() articleId : number = 0;
  data : ArticleDto | undefined;
  htmlContent! : SafeHtml;
  imageUrl!: string;


  constructor(
    private service: Directus,
    private sanitizer: DomSanitizer
  ) {}


  async ngOnInit() {
    try {
      this.data = await this.service.getArticle(this.articleId);
      console.log('Article data:', this.data);

      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.data.preview_content);
      this.imageUrl = `${environment.apiUrl}/assets/${this.data?.image}`;
    } catch (error) {
      console.error('Error loading data: ', error);
    }
  }
}
