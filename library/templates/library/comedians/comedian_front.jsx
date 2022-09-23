import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import comediansState from 'library/templates/library/comedians/state';
import Rating from 'components/ratings/rating';
import Expand from 'components/ratings/expand';
import 'library/css/comedians_cards__front.css'
import editComedianState from 'library/templates/library/edit_comedian/state';
import {axiosPostRequest} from 'components/axios_requests';
import {notify} from 'components/react_toastify_settings';

function ComedianFront(props) {
  const [state, setState] = useSetState({
    comedian: comediansState.comedians[props.comedian_index]
  });

  function expand() {
    console.log('expand from front');
  }

  const changeUserRating = (rating_user) => {
    comediansState.comedians[props.comedian_index].rating_user = rating_user;

    let formData = new FormData();
    formData.append('comedian_id', JSON.stringify(comediansState.comedians[props.comedian_index].id));
    formData.append('rating', rating_user);

    axiosPostRequest('rate_comedian', formData)
      .then((response) => {
        console.log('good');
      })
      .catch((error) => notify(error));
  };

  return (
    <div className='card__side card__side--front' style={{backgroundImage: `url(/media/${state.comedian.picture})`}}>
      <div className='outline'>
        <Expand id={state.comedian.id} />
        <div className='card__side--front__info'>
          <div className='card__side--front__footer'>
            <div className='card__side--front__name'>{state.comedian.name}</div>
            <Rating
              id={`comedian_${state.comedian.id}`}
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
