import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import Special from 'library/templates/library/comedians/specials_list/special';

function SpecialsList(props) {
  const [state, setState] = useSetState({

  });

  function onClick() {

  }

  return (
    <ul className='card__side--back__specials'>
      <For each='special' of={props.specials} index='special_idx'>
        <Special key={special_idx} {...special} />
      </For>
    </ul>
  );
}

SpecialsList.defaultProps = {
  specials: []
}

export default view(SpecialsList);
