import branch from 'recompose/branch';
import compose from 'recompose/compose';
import renderComponent from 'recompose/renderComponent';
import setDisplayName from 'recompose/setDisplayName';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

import Login, { FormValues } from 'components/Login';

import { Layout } from './Layout';

interface Props {
  user: any;
  handleLogin(payload: FormValues): Promise<void>;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    boxShadow: `0 0 5px ${theme.palette.action.disabled}`,
    padding: '25px',
    width: '320px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  branch((props: Props) => !props.user, renderComponent(Login)),

  withStyles(styles),

  setDisplayName('Layout'),
);

export default enhance(Layout);
