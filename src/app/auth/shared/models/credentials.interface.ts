export interface CustomAttributesInterface {
  email?: string;
  phone_number?: string; //+Country RegionCode Number => +5581xxxxxxxxx
  given_name?: string;
  family_name?: string;
}

export interface CredentialsInteface {
  username?: string;
  usernameType?: string;
  password?: string;
  oldPassword?: string;
  verificationCode?: string;
  attributes?: CustomAttributesInterface;
}
