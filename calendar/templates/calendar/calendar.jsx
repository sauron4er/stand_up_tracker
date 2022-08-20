import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Calendar() {
  const [state, setState] = useSetState({

  });

  return (
    <>
     Calendar
    </>
  );
}

export default view(Calendar);
