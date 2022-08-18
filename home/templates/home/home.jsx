import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Home() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      home
    </>
  );
}

export default view(Home);
