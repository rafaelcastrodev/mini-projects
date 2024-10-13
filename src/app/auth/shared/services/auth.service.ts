import { Injectable } from '@angular/core';

/**MODELS */
import { CredentialsInteface } from '../models/credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated() {
    return new Promise((resolve) => resolve(true));
  }

  signIn(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  signUp(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  signOut() {
    return new Promise((resolve) => resolve(true));
  }

  signOutFromAllDevices() {
    return new Promise((resolve) => resolve(true));
  }

  confirmSignUpUser(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  forgotPassword(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  changePasswordWithVerificationCode(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  resendSignUpConfirmationCode(credentials: CredentialsInteface) {
    return new Promise((resolve) => resolve(true));
  }

  getCurrentAuthenticatedUser() {
    return new Promise((resolve) => resolve(true));
  }
}
