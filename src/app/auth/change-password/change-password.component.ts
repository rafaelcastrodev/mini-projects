import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**CUSTOM FORM VALIDATORS */
import { MatchValidator } from '../../shared/form-validators/match.validator';

/**MODELS */
import { CredentialsInteface } from '../shared/models/credentials.interface';

/**SERVICES */
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passwordVisible: boolean = false;
  form!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {}

  get formcontrol() {
    return this.form.controls;
  }

  get passwordMatchError() {
    return (
      this.form.getError('mismatch') &&
      this.form.get('confirmPassword')?.touched
    );
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
      username: "this.formcontrol['username'].value",
      verificationCode: 'this.credentials.verificationCode',
      password: this.formcontrol['password'].value,
    };

    try {
      await this._authService.changePasswordWithVerificationCode(credentials);
      await this._authService.signIn(credentials);
      await this._router.navigate(['/'], { replaceUrl: true });
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
    this.form = new FormGroup(
      {
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/),
          Validators.minLength(8),
          Validators.maxLength(999),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
      },
      [MatchValidator('password', 'confirmPassword')]
    );
  }
}
