import React from 'react';

import { EnhancedProps } from './';

export const FormHelper = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      {props.children}
    </div>
  );
});
