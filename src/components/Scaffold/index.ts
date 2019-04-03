import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import withStyles from 'react-jss';

import { Theme, WithStyles, withTheme } from 'helpers/Theme';

import { Action, Scaffold, State } from './Scaffold';

interface Props {
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    // height: '90vh',
    justifyContent: 'center',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withTheme(),

  withStyles(styles),

  setDisplayName('Scaffold'),
);

export default enhance(Scaffold);
