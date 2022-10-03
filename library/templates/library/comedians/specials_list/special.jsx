import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import Rating from 'components/ratings/rating';
import comediansState from 'library/templates/library/comedians/state';
import {axiosPostRequest} from 'components/axios_requests';
import {notify} from 'components/react_toastify_settings';

function Special(props) {
  const [state, setState] = useSetState({

  });

  const changeSpecialRating = (rating_user) => {
    comediansState.comedians[props.comedian_index].specials[props.special_index].rating_user = rating_user;

    let formData = new FormData();
    formData.append('special_id', JSON.stringify(props.id));
    formData.append('rating', rating_user);

    axiosPostRequest('rate_special', formData)
      .then((response) => {
        console.log('good');
      })
      .catch((error) => notify(error));
  };

  return (
    <li>
      <div className='special_card'>
        <div className='special_card__name'>{props.name}</div>
        <Rating
          id={`special_${props.id}`}
          rating_global={props.rating_global}
          rating_user={props.rating_user}
          changeUserRating={changeSpecialRating}
        />
      </div>
    </li>
  );
}

Special.defaultProps = {
  comedian_index: -1,
  special_index: -1,
  id: 0,
  name: '',
  rating_global: '',
  rating_user: ''
};

export default view(Special);
