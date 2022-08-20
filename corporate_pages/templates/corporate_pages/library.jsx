import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Library() {
  const [state, setState] = useSetState({

  });

  console.log(navigator.onLine);

  return (
    <>
      library
    </>
  );
}

export default view(Library);
