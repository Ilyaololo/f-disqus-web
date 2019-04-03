import React from 'react';

import axios from 'axios';

import { ORIGIN_HOST } from 'configs';

import Layout from 'components/Layout';
import { FormValues } from 'components/Login';

import { EnhancedProps } from './';

const AUTHORIZED = 'AUTHORIZED';
const AUTHORIZING = 'AUTHORIZING';
const INITIALIZED = 'INITIALIZED';
const UNAUTHORIZED = 'UNAUTHORIZED';

export interface State {
  initialized: boolean;
  user: any | null;
}

export interface Action {
  type: string;
  payload: any;
}

type ReducerType = (state: State, action: Action) => State;

const initialState: State = {
  initialized: false,
  user: null,
};

function authorized(payload: any): Action {
  return {
    type: AUTHORIZED,
    payload,
  };
}

function authorizing(): Action {
  return {
    type: AUTHORIZING,
    payload: {},
  };
}

function initialized(): Action {
  return {
    type: INITIALIZED,
    payload: {},
  };
}

function unauthorized(): Action {
  return {
    type: UNAUTHORIZED,
    payload: {},
  };
}

function reducer(state: State, action: Action): State {
  console.groupCollapsed(action.type);
  console.log(action);
  console.groupEnd();

  switch (action.type) {
    case AUTHORIZED: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case AUTHORIZING: {
      return state;
    }

    case INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }

    case UNAUTHORIZED: {
      return {
        ...state,
        user: null,
      };
    }

    default: {
      throw new Error('Unknown action type');
    }
  }
}

export const Scaffold = React.memo((props: EnhancedProps) => {
  const [state, dispatch] = React.useReducer<ReducerType>(reducer, initialState);

  async function authorize() {
    try {
      const url = new URL('/api/user', ORIGIN_HOST);

      const response = await axios.get(String(url), {
        withCredentials: true,
      });

      dispatch(authorized(response.data));
    } catch (err) {
      dispatch(unauthorized());
    } finally {
      dispatch(initialized());
    }
  }

  async function login(payload: FormValues) {
    try {
      const url = new URL('/api/auth/login', ORIGIN_HOST);

      const response = await axios.post(String(url), payload, {
        withCredentials: true,
      });

      dispatch(authorized(response.data));
    } catch (err) {
      dispatch(unauthorized());

      throw err;
    }
  }

  React.useEffect(() => {
    authorize();
  }, []);

  if (!state.initialized) {
    return null;
  }

  return (
    <div className={props.classes.root}>
      <Layout
        handleLogin={login}
        user={state.user}
      />
    </div>
  );
});
