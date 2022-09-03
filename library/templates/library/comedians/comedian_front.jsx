import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import comediansState from 'library/templates/library/comedians/state';
import Rating from 'templates/components/ratings/rating';
import Expand from 'templates/components/ratings/expand';
import 'static/css/comedians_cards__front.css'

function ComedianFront(props) {
  const [state, setState] = useSetState({
    comedian: comediansState.comedians[props.comedian_index]
  });

  function expand() {
    console.log('expand from front');
  }

  const changeUserRating = (rating_user) => {
    comediansState.comedians[props.comedian_index].rating_user = rating_user;
    // post to database;
  };

  return (
    <div className='card__side card__side--front' style={{backgroundImage: `url(/media/comedians/${state.comedian.picture})`}}>
      <div className='outline'>
        <Expand id={state.comedian.id} />
        <div className='card__side--front__info'>
          <div className='card__side--front__footer'>
            <div className='card__side--front__name'>{state.comedian.name}</div>
            <Rating
              id={state.comedian.id}
              rating_global={state.comedian.rating_global}
              rating_user={state.comedian.rating_user}
              changeUserRating={changeUserRating}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ComedianFront.defaultProps = {
  comedian_index: -1
};

export default view(ComedianFront);
