import * as Yup from 'yup';
import valid from 'card-validator';

export const creditCardValidation = {
  creditCardNumber: Yup.string()
    .test(
      'test-number',
      'Credit Card number is invalid',
      value => valid.number(value).isValid,
    )
    .required('required'),
  ccExpDate: Yup.string()
    .test(
      'test-date',
      'Credit Card expiration data is invalid',
      value => valid.expirationDate(value).isValid,
    )
    .required('required'),
  cvv: Yup.string()
    .test(
      'test-ccv',
      'Credit Card ccv data is invalid',
      value => valid.cvv(value).isValid,
    )
    .required('required'),
};

export const subscriptinValidation = {
  duration: Yup.number().required('required').positive(),
  storage: Yup.number().required('required').positive(),
  isUpfrontPayment: Yup.boolean().required('required'),
};

export const finalValidation = {
  email: Yup.string()
    .email('Email value is invalid')
    .required('Email field is required'),
  acceptedTerms: Yup.boolean().isTrue('Please accept T&C'),
};
