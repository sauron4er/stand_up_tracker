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
  specials: [],

  setInitialState(initial) {
    editComedianState.id = initial.id
    editComedianState.name = initial.name
    editComedianState.country = initial.country
    editComedianState.country_name = initial.country_name
    editComedianState.born = initial.born
    editComedianState.died = initial.died
    editComedianState.wiki = initial.wiki
    editComedianState.picture = initial.picture
  }
});

export default editComedianState;
