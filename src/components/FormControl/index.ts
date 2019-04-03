import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { FormControl } from './FormControl';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  disabled?: boolean;
  error?: string;
  help?: string;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: any;
  onBlur(e: React.ChangeEvent<any>): void;
  onChange(e: React.ChangeEvent<any>): void;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('FormControl'),
);

export default enhance(FormControl);
