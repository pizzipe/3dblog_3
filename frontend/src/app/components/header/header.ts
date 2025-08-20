import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [/*RouterOutlet, */RouterLink/*, RouterLinkActive*/, CommonModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() menuOpen = new EventEmitter<boolean>();
  val = false;

  toggleMenu() {
    this.val = !this.val;
    this.menuOpen.emit(this.val);
  }
}
