import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import Comedian from 'library/templates/library/comedians/comedian';
import 'static/css/comedians_cards.css';

function Comedians() {
  const [state, setState] = useSetState({
    comedians: [
      {
        info: {
          id: 1,
          name: 'Jerry Seinfeld',
          born: 'April 29, 1954',
          rating_global: '4.7',
          rating_user: '',
          died: '',
          picture: 'Jerry_Seinfeld.jpg',
          wiki_url: 'https://en.wikipedia.org/wiki/Jerry_Seinfeld'
        },
        specials: []
      },
      {
        info: {
          id: 2,
          name: 'Bill Burr',
          born: 'June 10, 1968',
          rating_global: '4.5',
          rating_user: '',
          died: '',
          picture: 'Bill_Burr.jpg',
          wiki_url: 'https://en.wikipedia.org/wiki/Bill_Burr'
        },
        specials: []
      },
      {
        info: {
          id: 3,
          name: 'Louis C.K.',
          born: 'September 12, 1967',
          rating_global: '4.3',
          rating_user: '',
          died: '',
          picture: 'Louis_CK.jpg',
          wiki_url: 'https://en.wikipedia.org/wiki/Louis_C.K.'
        },
        specials: []
      },
      {
        info: {
          id: 4,
          name: 'Ali Wong',
          born: 'April 19, 1982',
          rating_global: '4.2',
          rating_user: '',
          died: '',
          picture: 'Ali_Wong.jpg',
          wiki_url: 'https://en.wikipedia.org/wiki/Ali_Wong'
        },
        specials: []
      },
      {
        info: {
          id: 5,
          name: 'Joe Rogan',
          born: 'August 11, 1967',
          rating_global: '4.2',
          rating_user: '',
          died: '',
          picture: 'Joe_Rogan.jpg',
          wiki_url: 'https://en.wikipedia.org/wiki/Joe_Rogan'
        },
        specials: []
      }
    ]
  });

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>
      {/*<div>Сортування за зірочками або по алфавіту</div>*/}
      {/*<div>Сховати повністю переглянутих</div>*/}

      <ul className='cards'>
        <For each='comedian' of={state.comedians} index='idx'>
          <Comedian comedian={comedian} />
        </For>
      </ul>
    </>
  );
}

export default view(Comedians);
