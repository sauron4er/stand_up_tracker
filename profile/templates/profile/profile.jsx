import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Profile() {
  const [state, setState] = useSetState({

  });

  return (
    <>
     Profile
    </>
  );
}

export default view(Profile);
