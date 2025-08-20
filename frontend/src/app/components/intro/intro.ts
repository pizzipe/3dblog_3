import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Directus } from '../../services/directus/directus';
import { CommonDto } from '../../dtos/common-dto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})
export class Intro implements OnInit {
  data: CommonDto | undefined;
  imageUrl!: string;


  constructor(
    private service: Directus,
    private sanitizer: DomSanitizer
  ) {}


  async ngOnInit() {
    try {
      this.data = await this.service.getCommonData();
      console.log('Common data:', this.data);

      this.imageUrl = `${environment.apiUrl}/assets/${this.data?.image}`;
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
}
