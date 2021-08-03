import * as Yup from 'yup';

export interface FormProps {
  values: {
    password: string;
    passwordConfirm: string;
  };
}

export const INITIAL_FORM_STATE = { password: '', passwordConfirm: '' };

export const Errors = {
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_LENGHT: 'Password needs more than 8 characters',
  PASSWORD_CONFIRM_REQUIRED: 'Password Confirm is required',
  PASSWORD_MATCH: 'Passwords must match',
};

export const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string()
    .required(Errors.PASSWORD_REQUIRED)
    .min(8, Errors.PASSWORD_LENGHT),
  passwordConfirm: Yup.string()
    .required(Errors.PASSWORD_CONFIRM_REQUIRED)
    .oneOf([Yup.ref('password'), null], Errors.PASSWORD_MATCH),
});
