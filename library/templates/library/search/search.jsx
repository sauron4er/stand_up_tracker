import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Search() {
  const [state, setState] = useSetState({

  });

  return (
    <>
     Search
    </>
  );
}

export default view(Search);
