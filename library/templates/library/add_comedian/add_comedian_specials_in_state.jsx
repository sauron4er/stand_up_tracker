import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';
import AddSpecial from 'library/templates/library/add_comedian/add_special';
import 'static/css/forms/add_comedian.css';

function AddComedian() {
  const [state, setState] = useSetState({
    name: '',
    country: '',
    born: '',
    died: '',
    picture: '',
    specials: []
  });

  function newSpecial(e) {
    e.preventDefault();
    let specials = [...state.specials];
    const new_special = {
      id: 0,
      name: '',
      duration: '',
      release_date: '',
      streaming: '',
      picture: '',
      status: 'new'
    };
    specials.push(new_special);
    setState({specials});
  }

  function editSpecial(index, special) {
    let specials = [...state.specials];
    specials[index] = special
    setState({specials});
  }

  function delSpecial(index) {
    let specials = [...state.specials];
    console.log('-------------');
    console.log(`before: ${specials.length}`);
    console.table(specials);
    console.log(`delete index: ${index}`);
    specials.splice(index, 1);
    console.log(`after: ${specials.length}`);
    console.table(specials);
    setState({specials});
    console.log('-------------');

    // let a = [1, 2, 3, 4]
    // a.splice(index, 1)
    // console.log(a);

  }

  // console.log(state.specials);

  // validation - unique name, born date, at least one special

  function onChange(e, field) {
    setState({[field]: e.target.value})
  }

  return (
    <>
      <h4>Add comedian</h4>
      <hr />
      <div className='comedian form'>
        <div className='fields'>
          <label htmlFor='name'>Name</label>
          <input id='name' className='input' type='text' placeholder='Name' autoFocus onChange={e => onChange(e, 'name')} />
          <label htmlFor='born'>Born</label>
          <input id='born' className='input' type='date' />
          <label htmlFor='died'>Died</label>
          <input id='died' className='input' type='date' placeholder='Died' />
          <label htmlFor='wiki'>Wikipedia link</label>
          <input id='wiki' className='input' type='text' placeholder='Wikipedia link' />
        </div>
        <div className='picture'>
          <UploadAndDisplayImage alt={state.name} />
        </div>
      </div>

      <hr />
      <h5>Specials:</h5>
      <For each='special' of={state.specials} index='special_idx'>
        <AddSpecial key={special_idx} index={special_idx} {...special} edit={editSpecial} delete={delSpecial} />
      </For>
      <button className='btn' onClick={newSpecial}>
        Add special
      </button>

      <hr />
      <button className='btn'>Submit</button>
    </>
  );
}

export default view(AddComedian);
