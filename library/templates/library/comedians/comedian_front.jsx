import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from 'templates/components/ratings/rating';

function ComedianFront(props) {
  const [state, setState] = useSetState({});

  return (
    <div className='card__side card__side--front' style={{backgroundImage: `url(/media/comedians/${props.info.picture})`}}>
      <div className='card__side--front__outline'>
        <div className='card__side--front__info'>
          <Rating id={props.info.id} rating_global={props.info.rating_global} rating_user={props.info.rating_user} />
          <div className='card__side--front__footer'>
            <div className='card__side--front__name'>{props.info.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default view(ComedianFront);
