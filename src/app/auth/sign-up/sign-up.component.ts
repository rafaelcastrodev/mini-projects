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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  appRoutes = appRoutesNames;
  authRoutes = authRoutesNames;
  passwordVisible: boolean = false;
  form!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {}

  get formcontrol() {
    return this.form.controls;
  }

  get passwordPatternError() {
    return this.form.getError('passwordPatternError');
  }

  ngOnInit() {
    this.initForm();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async onSubmit(): Promise<void> {
    if (!this.canSubmit()) {
      return;
    }

    const credentials: CredentialsInteface = {
      username: this.formcontrol['username'].value,
      password: this.formcontrol['password'].value,
    };
    //TODO: set temp credentials
    try {
      await this._authService.signUp(credentials);
      await this._router.navigate(['/auth/validate-code'], {
        replaceUrl: true,
      });
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
      fullName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/),
        Validators.minLength(8),
        Validators.maxLength(999),
      ]),
    });
  }
}
