import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**MODELS */
import { authRoutesNames } from './auth-routes-names';

/**COMPONENTS */
import { AuthComponent } from './auth.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ValidateCodeComponent } from './validate-code/validate-code.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: authRoutesNames.SIGN_IN.route,
        component: SignInComponent,
        title: authRoutesNames.SIGN_IN.label,
      },
      {
        path: authRoutesNames.SIGN_UP.route,
        component: SignUpComponent,
        title: authRoutesNames.SIGN_IN.label,
      },
      {
        path: authRoutesNames.CHANGE_PASSWORD.route,
        component: ChangePasswordComponent,
        title: authRoutesNames.CHANGE_PASSWORD.label,
      },
      {
        path: authRoutesNames.FORGOT_PASSWORD.route,
        component: ForgotPasswordComponent,
        title: authRoutesNames.FORGOT_PASSWORD.label,
      },
      {
        path: authRoutesNames.VALIDATE_CODE.route,
        component: ValidateCodeComponent,
        title: authRoutesNames.VALIDATE_CODE.label,
      },
      {
        path: '',
        redirectTo: authRoutesNames.SIGN_IN.route,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
