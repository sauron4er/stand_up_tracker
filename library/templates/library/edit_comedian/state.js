import {store, view} from '@risingstack/react-easy-state';

const editComedianState = store({
  id: 0,
  name: '',
  country: 0,
  country_name: '',
  born: '',
  died: '',
  wiki: '',
  picture: '',
  specials: []
});

export default editComedianState;
