import { Component } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  standalone: true,
  template: `<div class="d-flex justify-content-center">
  <div class="spinner-border text-info" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`,
})
export class LoadingSpinnerComponent {}
