import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {

  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string = '';

  get player() {
    return this.xIsNext ? 'x' : 'o';
  }


  move(i: number) {
    console.log(this.squares);
    console.log(i);
    if (!this.squares[i]) {
        this.squares.splice(i, 1, this.player);
        this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }


}
