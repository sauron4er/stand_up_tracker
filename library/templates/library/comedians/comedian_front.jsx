import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function ComedianFront() {
  const [state, setState] = useSetState({});

  return (
    <div className='comedian-front'>
      Comedian Info
    </div>
  );
}

export default view(ComedianFront);
