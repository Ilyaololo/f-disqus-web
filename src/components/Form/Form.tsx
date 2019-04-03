import React from 'react';

import { EnhancedProps } from './';

export const Form = React.memo((props: EnhancedProps) => {
  return (
    <form className={props.classes.root} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
});
