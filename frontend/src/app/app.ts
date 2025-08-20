import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Menu/*, Footer*/],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  title = '3dblog_3';

  isLoading = true;
  menuOpen = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  readMenuStatus(msg: boolean) {
    this.menuOpen = msg;
  }

  hide() {
    this.menuOpen = false;
  }
}
