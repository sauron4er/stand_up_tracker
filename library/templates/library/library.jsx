import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Comedians from './comedians';
import Specials from './specials';
import 'static/css/library/library.css';

function Library() {
  const [state, setState] = useSetState({
    view: 'comedians' // , 'specials
  });

  function onRadioClick(e) {
    setState({view: e.target.id});
  }

  function addComedianClick() {

  }

  return (
    <>
      <div className='buttons_container'>
        <button id='comedians' className={`library_button ${state.view === 'comedians' ? 'active' : ''}`} onClick={onRadioClick}>
        Comedians
        </button>
        <button id='specials' className={`library_button ${state.view === 'specials' ? 'active' : ''}`} onClick={onRadioClick}>
          Specials
        </button>

        {/*<a href={`${window.location.origin}/library/add_comedian/`} id='add_comedian' className='library_button' onClick={addComedianClick}>*/}
        <a href='add_comedian' id='add_comedian' className='library_button' onClick={addComedianClick}>
          Add Comedian
        </a>
      </div>

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
