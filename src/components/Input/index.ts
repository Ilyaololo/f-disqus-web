import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { Input } from './Input';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  disabled?: boolean;
  id: string;
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
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '2px',
    fontSize: '15px',
    height: '25px',
    outline: 'none',
    padding: '5px 10px',
    transition: 'all 100ms ease-in-out',
    '&:focus': {
      border: `1px solid ${theme.palette.action.active}`,
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Input'),
);

export default enhance(Input);
