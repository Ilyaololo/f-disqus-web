import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { FormHelper } from './FormHelper';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  children?: React.ReactNode;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    color: theme.palette.action.active,
    padding: '5px 5px 0px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('FormHelper'),
);

export default enhance(FormHelper);
