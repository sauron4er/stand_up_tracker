import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Library() {
  const [state, setState] = useSetState({

  });

  return (
    <>
     Library
    </>
  );
}

export default view(Library);
