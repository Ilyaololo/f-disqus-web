import React from 'react';

import Button from 'components/Button';
import Form from 'components/Form';
import FormControl from 'components/FormControl';
import FormGroup from 'components/FormGroup';

import { EnhancedProps } from './';

export const Login = React.memo((props: EnhancedProps) => {
  return (
    <div className={props.classes.root}>
      <Form onSubmit={props.handleSubmit}>
        <FormGroup>
          <FormControl
            disabled={props.isSubmitting}
            error={props.errors.login}
            id="login"
            label="Login"
            name="login"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="example@email.com"
            type="text"
            value={props.values.login}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            disabled={props.isSubmitting}
            error={props.errors.password}
            id="password"
            label="Password"
            name="password"
            onBlur={props.handleBlur}
            onChange={props.handleChange}
            placeholder="password"
            type="password"
            value={props.values.password}
          />
        </FormGroup>
        <FormGroup>
          <Button disabled={props.isSubmitting}>
            Login
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
});
