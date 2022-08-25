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
    setState({view: e.target.id})
  }

  return (
    <div className='library'>
      <input type='radio' className='radio' id='comedians' name='group' checked={state.view === 'comedians'} onChange={onRadioClick} />
      <input type='radio' className='radio' id='specials' name='group' checked={state.view === 'specials'} onChange={onRadioClick} />
      <div className='tabs'>
        <label htmlFor='comedians' className='tab' id='comedians-tab'>Comedians</label>
        <label htmlFor='specials' className='tab' id='specials-tab'>Specials</label>
      </div>
      <div className='panels'>
        <div className='panel' id='comedians-panel'>
          <Comedians />
        </div>
        <div className='panel' id='specials-panel'>
          <Specials />
        </div>
      </div>

      {/*<Choose>*/}
      {/*  <When condition={state.view === 'comedians'}>*/}
      {/*    <Comedians />*/}
      {/*  </When>*/}
      {/*  <Otherwise>*/}
      {/*    <Specials />*/}
      {/*  </Otherwise>*/}
      {/*</Choose>*/}
    </div>
  );
}

export default view(Library);
