import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**COMPONENTS */
import { AuthComponent } from './auth.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ValidateCodeComponent } from './validate-code/validate-code.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ValidateCodeComponent,
  ],
})
export class AuthModule {}
