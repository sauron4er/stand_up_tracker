import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Comedian from 'library/templates/library/comedians/comedian';
import 'static/css/comedians_cards.css';

function Comedians() {
  const [state, setState] = useSetState({
    comedian: {
      info: {
        name: 'Jerry Seinfeld',
        born: 'April 29, 1954',
        rating: '4.7',
        died: '',
        picture: 'Jerry_Seinfeld.jpg',
        wiki_url: 'https://en.wikipedia.org/wiki/Jerry_Seinfeld'
      },
      specials: []
    }
  });

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>

      <ul className='cards'>
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
        <Comedian comedian={state.comedian} />
      </ul>
    </>
  );
}

export default view(Comedians);
