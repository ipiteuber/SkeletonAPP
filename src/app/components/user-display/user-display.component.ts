import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
  standalone: false
})
export class UserDisplayComponent {
  @Input() user: { user: string, pwd: string } | null = null;
}
