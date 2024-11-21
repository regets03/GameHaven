import { Component } from '@angular/core';
import { FieldComponent } from "./field/field.component";

@Component({
  selector: 'app-tictactoe',
  standalone: true,
  imports: [FieldComponent],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.scss'
})
export class TictactoeComponent{

}
