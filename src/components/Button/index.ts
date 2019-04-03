import React from 'react';

import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { Button } from './Button';

import withStyles from 'react-jss';

import { Theme, WithStyles } from 'helpers/Theme';

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface EnhancedProps extends Props, WithStyles {
}

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    color: theme.palette.common.white,
    cursor: 'pointer',
    fontSize: '16px',
    padding: '8px 25px',
    userSelect: 'none',
    width: '100%',
    '&:disabled': {
      backgroundColor: theme.palette.action.disabled,
      cursor: 'default',
    },
  },
});

const enhance = compose<EnhancedProps, Props>(
  withStyles(styles),

  setDisplayName('Button'),
);

export default enhance(Button);
