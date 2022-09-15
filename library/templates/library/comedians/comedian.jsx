import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
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
    <li>
      <div className={`c_card ${state.clicked ? 'clicked' : ''}`} onClick={onCardClick}>
        <ComedianFront comedian_index={props.comedian_index} />
        <ComedianBack comedian_index={props.comedian_index} />
      </div>
    </li>
  );
}

Comedian.defaultProps = {
  comedian_index: -1
}

export default view(Comedian);
