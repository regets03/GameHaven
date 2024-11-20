import { Component } from '@angular/core';
import { SquareComponent } from "./square/square.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [SquareComponent, CommonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent {

}
