import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';

function MySpecials() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      My specials
    </>
  );
}

export default view(MySpecials);
