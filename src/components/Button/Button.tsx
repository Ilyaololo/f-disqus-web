import React from 'react';

import { EnhancedProps } from './';

export const Button = React.memo((props: EnhancedProps) => {
  return (
    <button className={props.classes.root} disabled={props.disabled} type="submit">
      {props.children}
    </button>
  );
});
