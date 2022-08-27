import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import ComedianBack from 'library/templates/library/comedians/comedian_back';
import ComedianFront from 'library/templates/library/comedians/comedian_front';

function Comedian(props) {
  const [state, setState] = useSetState({
    clicked: false
  });

  function onCardClick() {
    setState({clicked: !state.clicked});
  }

  return (
    <div className={`c_card ${state.clicked ? 'clicked' : ''}`} onClick={onCardClick}>
      <ComedianFront info={props.comedian.info} />
      <ComedianBack specials={props.comedian.specials} />
    </div>
  );
}

export default view(Comedian);