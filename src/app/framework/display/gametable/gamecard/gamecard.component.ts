import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamecard',
  standalone: true,
  imports: [],
  templateUrl: './gamecard.component.html',
  styleUrl: './gamecard.component.scss'
})
export class GamecardComponent {

  @Input() title: string = '';
  @Input() img: string = '';
  
  currentUrl: string = '';


  constructor(private router: Router) {}

  navigateToGame(): void {
    this.currentUrl = this.router.url;
    console.log(`${this.currentUrl}/${this.title.toLowerCase()}`);
    this.router.navigate([`${this.currentUrl}/${this.title.toLowerCase()}`]);
  }
  
}
