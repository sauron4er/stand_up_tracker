import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from 'templates/components/ratings/rating';
import Expand from 'templates/components/ratings/expand';

function ComedianBack(props) {
  const [state, setState] = useSetState({});

  function expand() {
    console.log('expand from back');
  }

  return (
    <div className='card__side card__side--back'>
      <div className='outline'>
        <Expand id={props.info.id} />
        <div>List of Specials</div>
      </div>
    </div>
  );
}

ComedianBack.defaultProps = {
  info: {
    id: 0
  },
  specials: {}
}

export default view(ComedianBack);
