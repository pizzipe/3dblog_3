import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faRss, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,  faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Directus } from '../../services/directus/directus';
import { CommonDto } from '../../dtos/common-dto';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  data: CommonDto | undefined;
  copyright! : SafeHtml;
  twitterIcon = faTwitter;
  facebookIcon = faFacebookF;
  instagramIcon = faInstagram;
  rssIcon = faRss;
  emailIcon = faEnvelope;
  faCoffee = faCoffee;


  constructor(
   private service: Directus,
   private sanitizer: DomSanitizer
  ) {}


  async ngOnInit() {
   try {
     this.data = await this.service.getCommonData();
     console.log('Common data:', this.data);

     this.copyright = this.sanitizer.bypassSecurityTrustHtml(this.data.copyright);
   } catch (error) {
     console.error('Error loading data:', error);
   }
  }
}
