import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Directus } from '../../services/directus/directus';
import { CommonDto } from '../../dtos/common-dto';

@Component({
  selector: 'app-about-preview',
  imports: [/*RouterOutlet,*/ RouterLink/*, RouterLinkActive*/],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss'
})
export class AboutPreview implements OnInit {
  data: string | undefined;


  constructor(private service: Directus) {}


  async ngOnInit() {
    try {
      const commonData = await this.service.getCommonData();
      this.data = commonData.about_preview;
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
}
