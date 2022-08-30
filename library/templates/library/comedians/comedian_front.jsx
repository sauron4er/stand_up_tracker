import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from 'react-rating';

function ComedianFront(props) {
  const [state, setState] = useSetState({});

  return (
    <div className='card__side card__side--front' style={{backgroundImage: `url(/media/comedians/${props.info.picture})`}}>
    {/*<div className='card__side card__side--front'>*/}
    {/*<div className='card__side card__side--front'>*/}
      <div className='outline'>
        <div className='rating'><Rating
          initialRating={props.info.rating}
          // emptySymbol='bx bx-star'
          // fullSymbol='bx bxs-star'
          emptySymbol={<img alt='' src="static/star-empty.svg" className="icon" />}
          fullSymbol={<img src="static/star-full.svg" className="icon" />}
          fractions={2}
        /></div>
        <div className='comedian_info'>
          {/*<div style={{backgroundImage: 'url(/media/comedians/Jerry_Seinfeld.jpg)'}}></div>*/}
          <div className='name'>{props.info.name}</div>
        </div>
      </div>
    </div>
  );
}

export default view(ComedianFront);
