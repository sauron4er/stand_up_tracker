import {store, view} from '@risingstack/react-easy-state';

const editComedianState = store({
  name: '',
  country: '',
  born: '',
  died: '',
  picture: '',
  specials: []
});

export default editComedianState;
