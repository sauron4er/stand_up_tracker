import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function Special(props) {
  const [state, setState] = useSetState({

  });

  function onClick() {

  }

  // console.log(props);

  return (
    <li>
      <div className='special_card' onClick={onClick}>
        <div className='special_card__name'>{props.name}</div>
      </div>
    </li>
  );
}

Special.defaultProps = {
  name: '',
  rating_global: '',
  rating_user: ''
}

export default view(Special);
