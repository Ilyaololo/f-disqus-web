import React from 'react';

import FormHelper from 'components/FormHelper';
import Input from 'components/Input';
import Label from 'components/Label';

import { EnhancedProps } from './';

export const FormControl = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <Label id={props.id}>
        {props.label}
      </Label>
      <Input
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
      <FormHelper>
        {props.error || props.help}
      </FormHelper>
    </div>
  );
});
