import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from '../../../../templates/components/ratings/rating';

function ComedianBack() {
  const [state, setState] = useSetState({});

  function expand() {
    console.log('expand from back');
  }

  return (
    <div className='card__side card__side--back'>
      <div className='outline'>
        <i className='bx bx-expand-alt' onClick={expand} />
        <div>List of Specials</div>
      </div>
      {/*<div className='card__description'>*/}
      {/*  <div className='comedian-back'>List of specials</div>*/}
      {/*</div>*/}
    </div>
  );
}

export default view(ComedianBack);
