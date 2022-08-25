import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Specials() {
  const [state, setState] = useSetState({});

  return (
    <>
      <h4>Specials database</h4>
      <div>Search</div>
      Specials
    </>
  );
}

export default view(Specials);
