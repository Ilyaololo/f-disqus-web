import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { FormikBag, FormikProps, withFormik } from 'formik';
import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

import { Login } from './Login';

export interface FormValues {
  login: string;
  password: string;
}

interface Props {
  handleLogin(payload: FormValues): Promise<void>;
}

export interface EnhancedProps extends Props, FormikProps<FormValues>, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    boxShadow: `0 0 5px ${theme.palette.action.disabled}`,
    padding: '25px',
    width: '320px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withFormik<EnhancedProps, FormValues>({
    displayName: 'Login',

    mapPropsToValues() {
      return {
        login: 'admin@example.com',
        password: '123123',
      };
    },

    async handleSubmit(values: FormValues, formikBag: FormikBag<EnhancedProps, FormValues>) {
      try {
        await formikBag.props.handleLogin(values);
      } catch (err) {
        formikBag.setSubmitting(false);
      }
    },
  }),

  withStyles(styles),

  setDisplayName('Login'),
);

export default enhance(Login);
