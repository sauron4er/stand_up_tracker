import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import {SideBar} from 'templates/components/sidebar';

function Home() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      <SideBar />
      home
    </>
  );
}

export default view(Home);
