import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**MODELS */
import { appRoutesNames } from '../../app-routes-names';
import { authRoutesNames } from '../auth-routes-names';
import { CredentialsInteface } from '../shared/models/credentials.interface';

/**SERVICES */
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  appRoutes = appRoutesNames;
  authRoutes = authRoutesNames;
  form!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {}

  get formcontrol() {
    return this.form.controls;
  }

  ngOnInit() {
    this.initForm();
  }

  async onSubmit(): Promise<void> {
    if (!this.canSubmit()) {
      return;
    }

    //TODO: set temp credentials
    const credentials: CredentialsInteface = {
      username: this.formcontrol['username'].value,
    };

    try {
      await this._authService.forgotPassword(credentials);
      await this._router.navigate(['/auth/validate-code']);
    } catch (e) {
      console.error(e);
    }
  }

  private canSubmit(): boolean {
    //And other verifications
    if (this.form.valid) {
      return true;
    }
    return false;
  }

  private initForm() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}
