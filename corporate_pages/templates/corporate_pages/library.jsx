import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';

function Library() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      library
    </>
  );
}

export default view(Library);
