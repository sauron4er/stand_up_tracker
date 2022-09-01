import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from 'templates/components/ratings/rating';
import Expand from '../../../../templates/components/ratings/expand';

function ComedianFront(props) {
  const [state, setState] = useSetState({});

  const test = (v) => {
    // console.log(v);
    // return(e) => console.log(e, v)
  }

  function expand() {
    console.log('expand from front');
  }

  return (
    <div className='card__side card__side--front' onClick={test(1)} style={{backgroundImage: `url(/media/comedians/${props.info.picture})`}}>
      <div className='outline'>
        <i className='bx bx-expand-alt' onClick={expand} />
        <Expand />
        <div className='card__side--front__info'>
          <div className='card__side--front__footer'>
            <div className='card__side--front__name'>{props.info.name}</div>
            <Rating id={props.info.id} rating_global={props.info.rating_global} rating_user={props.info.rating_user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default view(ComedianFront);
