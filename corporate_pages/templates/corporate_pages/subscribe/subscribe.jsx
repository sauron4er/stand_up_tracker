import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Subscribe() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      Subscribe
    </>
  );
}

export default view(Subscribe);
