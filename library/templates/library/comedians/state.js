import {store, view} from '@risingstack/react-easy-state';

const comediansState = store({
  comedians: [
    {
      id: 1,
      name: 'Jerry Seinfeld',
      born: 'April 29, 1954',
      rating_global: '4.7',
      rating_user: '5',
      died: '',
      picture: 'Jerry_Seinfeld.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Jerry_Seinfeld',
      specials: []
    },
    {
      id: 2,
      name: 'Bill Burr',
      born: 'June 10, 1968',
      rating_global: '4.5',
      rating_user: '4',
      died: '',
      picture: 'Bill_Burr.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Bill_Burr',
      specials: []
    },
    {
      id: 3,
      name: 'Louis C.K.',
      born: 'September 12, 1967',
      rating_global: '4.3',
      rating_user: '5',
      died: '',
      picture: 'Louis_CK.webp',
      wiki_url: 'https://en.wikipedia.org/wiki/Louis_C.K.',
      specials: []
    },
    {
      id: 4,
      name: 'Ali Wong',
      born: 'April 19, 1982',
      rating_global: '4.2',
      rating_user: '4',
      died: '',
      picture: 'Ali_Wong.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Ali_Wong',
      specials: []
    },
    {
      id: 5,
      name: 'Joe Rogan',
      born: 'August 11, 1967',
      rating_global: '4.2',
      rating_user: '4',
      died: '',
      picture: 'Joe_Rogan.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Joe_Rogan',
      specials: []
    },
    {
      id: 6,
      name: 'Amy Schumer',
      born: 'June 1, 1981',
      rating_global: '4.3',
      rating_user: '3',
      died: '',
      picture: 'Amy_Schumer.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Amy_Schumer',
      specials: []
    },
    {
      id: 7,
      name: 'Nikki Glaser',
      born: 'June 1, 1984',
      rating_global: '4.0',
      rating_user: '4',
      died: '',
      picture: 'Nikki_Glaser.jpg',
      wiki_url: 'https://en.wikipedia.org/wiki/Nikki_Glaser',
      specials: []
    }
  ]
});

export default comediansState;
