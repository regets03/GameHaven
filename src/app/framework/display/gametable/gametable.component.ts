import { Component, OnInit } from '@angular/core';
import { GamecardComponent } from './gamecard/gamecard.component';
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gametable',
  standalone: true,
  imports: [GamecardComponent, CommonModule],
  templateUrl: './gametable.component.html',
  styleUrl: './gametable.component.scss'
})


export class GametableComponent implements OnInit{

  placeholder: string = "assets/images/placeholder.png";

  category: string | null = null;
  allowedCategories = ['denken', 'strategie', 'geschick'];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const category = params['category'];
      if (this.allowedCategories.includes(category)) {
        this.category = category;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
