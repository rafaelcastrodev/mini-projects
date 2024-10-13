import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<main class="p-3"><router-outlet /></main>
  `,
})
export class AppComponent {}
