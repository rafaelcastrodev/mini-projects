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
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  appRoutes = appRoutesNames;
  authRoutes = authRoutesNames;
  passwordVisible: boolean = false;
  form!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {}

  get formcontrol() {
    return this.form.controls;
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

    try {
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
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }
}
