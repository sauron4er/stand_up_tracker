import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function ComedianBack() {
  const [state, setState] = useSetState({});

  return (
    <div className='card__side card__side--back'>
      <div className='card__description'>
        <div className='comedian-back'>List of specials</div>
      </div>
    </div>
  );
}

export default view(ComedianBack);
