import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import comediansState from 'library/templates/library/comedians/state';
import Comedian from 'library/templates/library/comedians/comedian';
import 'library/css/comedians_cards.css';

function Comedians() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>
      {/*<div>Сортування за зірочками або по алфавіту</div>*/}
      {/*<div>Сховати повністю переглянутих</div>*/}

      <ul className='cards'>
        <For each='comedian' of={comediansState.comedians} index='idx'>
          <Comedian key={idx} comedian_index={idx} />
        </For>
      </ul>
    </>
  );
}

export default view(Comedians);
