import { Component, Input } from '@angular/core';
import { FontSizeDirective } from '../font-size.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FontSizeDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() fSize?:number;
}
