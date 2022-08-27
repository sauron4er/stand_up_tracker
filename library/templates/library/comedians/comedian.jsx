import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import ComedianBack from 'library/templates/library/comedians/comedian_back';
import ComedianFront from 'library/templates/library/comedians/comedian_front';

function Comedian() {
  const [state, setState] = useSetState({
    clicked: false
  });

  function onCardClick() {
    setState({clicked: !state.clicked})
  }

  return (
    <div className={`c_card ${state.clicked ? 'clicked' : ''}`} onClick={onCardClick}>
      <div className='card__side card__side--front card__side--front-1'>
        <div className='card__description'>
          <ComedianFront />
        </div>
      </div>
      <div className='card__side card__side--back card__side--back-1'>
        <div className='card__description'>
          <ComedianBack />
        </div>
      </div>
    </div>
  );
}

export default view(Comedian);
