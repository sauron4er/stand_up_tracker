import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Library() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      <h4>Comedians database</h4>
      <div>Filter</div>
      <div>List of cards of comedians</div>
    </>
  );
}

export default view(Library);
