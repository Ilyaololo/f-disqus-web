import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { Form } from './Form';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  children?: React.ReactNode;
  onSubmit(e: React.FormEvent<any>): void;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Form'),
);

export default enhance(Form);
