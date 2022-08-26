import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Comedian from 'library/templates/library/comedians/comedian';
import 'static/css/comedians_cards.css'

function Comedians() {
  const [state, setState] = useSetState({});

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>
      <div className='cards'>
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
        <Comedian />
      </div>
    </>
  );
}

export default view(Comedians);
