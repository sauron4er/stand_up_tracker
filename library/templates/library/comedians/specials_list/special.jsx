import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Rating from 'templates/components/ratings/rating';

function Special(props) {
  const [state, setState] = useSetState({});

  function changeUserRating() {

  }



  return (
    <li>
      <div className='special_card'>
        <div className='special_card__name'>{props.name}</div>
        <Rating
          id={`special_${props.id}`}
          rating_global={props.rating_global}
          rating_user={props.rating_user}
          changeUserRating={changeUserRating}
        />
      </div>
    </li>
  );
}

Special.defaultProps = {
  id: 0,
  name: '',
  rating_global: '',
  rating_user: ''
};

export default view(Special);
