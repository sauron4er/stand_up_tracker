import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import comediansState from 'library/templates/library/comedians/state';
import Expand from 'components/ratings/expand';
import SpecialsList from 'library/templates/library/comedians/specials_list';
import 'library/css/comedians_cards__back.css'

function ComedianBack(props) {
  const [state, setState] = useSetState({
    comedian: comediansState.comedians[props.comedian_index]
  });

  function expand() {
    console.log('expand from back');
  }

  return (
    <div className='card__side card__side--back'>
      <div className='outline'>
        <Expand id={state.comedian.id} />
        <div className='card__side--back__name'>{state.comedian.name}</div>
        <SpecialsList comedian_index={props.comedian_index} />
      </div>
    </div>
  );
}

ComedianBack.defaultProps = {
  comedian_index: -1
}

export default view(ComedianBack);
