import React from 'react';

import { EnhancedProps } from './';

export const Layout = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <span>Hello, {props.user.login}</span>
    </div>
  );
});
