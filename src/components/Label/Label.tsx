import React from 'react';

import { EnhancedProps } from './';

export const Label = React.memo((props: EnhancedProps) => {
  return (
    <label className={props.classes.root} htmlFor={props.id}>
      {props.children}
    </label>
  );
});
