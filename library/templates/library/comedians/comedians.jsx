import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Comedians() {
  const [state, setState] = useSetState({});

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>
      Comedians
    </>
  );
}

export default view(Comedians);
