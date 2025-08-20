import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [Footer],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {

}
