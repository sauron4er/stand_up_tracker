import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import Special from 'library/templates/library/comedians/specials_list/special';
import comediansState from 'library/templates/library/comedians/state';

function SpecialsList(props) {
  const [state, setState] = useSetState({

  });

  function onClick() {

  }

  return (
    <ul className='card__side--back__specials'>
      <For each='special' of={comediansState.comedians[props.comedian_index].specials} index='special_idx'>
        <Special key={special_idx} comedian_index={props.comedian_index} special_index={special_idx} {...special} />
      </For>
    </ul>
  );
}

SpecialsList.defaultProps = {
  comedian_index: -1
}

export default view(SpecialsList);
