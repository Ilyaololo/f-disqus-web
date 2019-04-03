import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { FormGroup } from './FormGroup';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  children?: React.ReactNode;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    marginBottom: '15px',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('FormGroup'),
);

export default enhance(FormGroup);
