import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function ComedianFront(props) {
  const [state, setState] = useSetState({});

  return (
    <div className='card__side card__side--front' style={{backgroundImage: 'url(/media/comedians/Jerry_Seinfeld.jpg)'}}>
    {/*<div className='card__side card__side--front'>*/}
      <div className='card__description'>
        {/*<div style={{backgroundImage: 'url(/media/comedians/Jerry_Seinfeld.jpg)'}}></div>*/}
          <div className='name'>{props.info.name}</div>
      </div>
    </div>
  );
}

export default view(ComedianFront);
