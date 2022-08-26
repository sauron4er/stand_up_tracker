import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import ComedianBack from 'library/templates/library/comedians/comedian_back';
import ComedianFront from 'library/templates/library/comedians/comedian_front';

function Comedian() {
  const [state, setState] = useSetState({});

  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__description'>
          <ComedianFront />
        </div>
      </div>
      <div className='card__side card__side--back'>
        <div className='card__description'>
          <ComedianBack />
        </div>
      </div>
    </div>
  );
}

export default view(Comedian);
