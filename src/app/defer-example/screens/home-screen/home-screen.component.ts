import { Component, signal } from '@angular/core';
import { HeavyComponentComponent } from '../../components';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
})
export class HomeScreenComponent {
  shouldPrefetch = signal(false);
  isComponentVisible = signal(false);
}
