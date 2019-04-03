import React from 'react';

import { EnhancedProps } from './';

export const Input = React.memo((props: EnhancedProps) => {
  return (
    <input
      className={props.classes.root}
      disabled={props.disabled}
      id={props.id}
      onBlur={props.onBlur}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  );
});
