import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**MODELS */
import { CredentialsInteface } from '../shared/models/credentials.interface';

/**SERVICES */
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrls: ['./validate-code.component.scss'],
})
export class ValidateCodeComponent implements OnInit {
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

    //TODO: take temp credentials
    const credentials: CredentialsInteface = {
      username: 'this.credentials.username',
      verificationCode: this.formcontrol['code'].value,
      password: 'this.credentials.password',
    };

    try {
      if ('validateCodeForSignUp') {
        await this._authService.confirmSignUpUser(credentials);
        await this._authService.signIn(credentials);
        await this._router.navigate(['/']);
      }

      if ('validateCodeForPasswordReset') {
        //TODO: set temp credentials
        await this._router.navigate(['/auth/change-password'], {
          replaceUrl: true,
        });
      }
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
      code: new FormControl(null, [
        Validators.required,
        Validators.maxLength(6),
      ]),
    });
  }
}
