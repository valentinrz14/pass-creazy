import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { RED } from '../../common/colors';
import Button from '../buttons/Button';
import { FORM_VALIDATION, INITIAL_FORM_STATE, FormProps } from './types';
import Input from './Input';

interface FormState {
  handleOnSubmit: ({ values }: FormProps) => void;
}

const Form: FunctionComponent<FormState> = ({ handleOnSubmit }) => {
  const { titleError } = styles;

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={FORM_VALIDATION}
      onSubmit={values => handleOnSubmit({ values })}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors: { password, passwordConfirm },
        touched,
      }) => (
        <>
          <Input
            placeholder="Pass"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          {touched.password && password && (
            <Text style={titleError}>{password}</Text>
          )}
          <Input
            placeholder="Confirm"
            value={values.passwordConfirm}
            onChangeText={handleChange('passwordConfirm')}
            onBlur={handleBlur('passwordConfirm')}
          />
          {touched.passwordConfirm && passwordConfirm && (
            <Text style={titleError}>{passwordConfirm}</Text>
          )}
          <Button title="Click me" onPress={() => handleSubmit()} />
        </>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  titleError: {
    color: RED,
    fontSize: 16,
    paddingLeft: 8,
  },
});
export default Form;
