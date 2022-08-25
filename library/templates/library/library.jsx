import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Comedians from './comedians';
import Specials from './specials';
import 'static/css/library.css';

function Library() {
  const [state, setState] = useSetState({
    view: 'comedians' // , 'specials
  });

  function onRadioClick(e) {
    setState({view: e.target.id});
  }

  return (
    <>
      <button id='comedians' className={state.view === 'comedians' ? 'active' : ''} onClick={onRadioClick}>
        Comedians
      </button>
      <button id='specials' className={state.view === 'specials' ? 'active' : ''} onClick={onRadioClick}>
        Specials
      </button>

      <div className='library-content'>
        <Choose>
          <When condition={state.view === 'comedians'}>
            <div className='panel'>
              <Comedians />
            </div>
          </When>
          <Otherwise>
            <div className='panel'>
              <Specials />
            </div>
          </Otherwise>
        </Choose>
      </div>
    </>
  );
}

export default view(Library);
