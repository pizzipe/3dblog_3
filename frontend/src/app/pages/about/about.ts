import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Footer } from '../../components/footer/footer';
import { Directus } from '../../services/directus/directus';
import { CommonDto } from '../../dtos/common-dto';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Footer],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  data: CommonDto | undefined;
  htmlContent! : SafeHtml;

  constructor(
    private service: Directus,
    private sanitizer: DomSanitizer
  ) {}


  async ngOnInit() {
    try {
      this.data = await this.service.getCommonData();
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(this.data.about);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
}
