import React, {useState, useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';
import AddSpecial from 'library/templates/library/add_comedian/add_special';
import 'static/css/forms/add_comedian.css';

function AddComedian() {
  const [specials, setSpecials] = useState([]);
  const [state, setState] = useSetState({
    name: '',
    country: '',
    born: '',
    died: '',
    picture: ''
  });

  function onChange(e, field) {
    setState({[field]: e.target.value});
  }

  function onPictureChange(file) {
    setState({picture: file});
  }

  function specialsValid() {
    if (!specials.length) return false;
    else {
      for (const special of specials) {
        if (!special.name) return false;
      }
      return true;
    }
  }

  function postComedian() {}

  function newSpecial() {
    let new_specials = [...specials];
    const new_special = {
      id: 0,
      name: '',
      duration: '',
      release_date: '',
      streaming: '',
      picture: '',
      status: 'new',
      valid_filled: false
    };
    new_specials.push(new_special);
    setSpecials(new_specials);
  }

  function editSpecial(index, field_name, value) {
    let new_specials = [...specials];
    new_specials[index][field_name] = value;
    setSpecials(new_specials);
  }

  function delSpecial(index) {
    let new_specials = [...specials];
    new_specials.splice(index, 1);
    setSpecials(new_specials);
  }

  // validation - unique name, born date, at least one special

  return (
    <>
      <h4>Add comedian</h4>
      <hr />
      <div className='comedian form'>
        <div className='fields'>
          <label htmlFor='name'>Name</label>
          <input id='name' className='input' type='text' placeholder='Name' autoFocus onChange={(e) => onChange(e, 'name')} />
          <label htmlFor='country'>Country</label>
          <input id='country' className='input' type='text' placeholder='Country' onChange={(e) => onChange(e, 'country')} />
          <label htmlFor='born'>Born</label>
          <input id='born' className='input' type='date' onChange={(e) => onChange(e, 'born')} />
          <label htmlFor='died'>Died</label>
          <input id='died' className='input' type='date' placeholder='Died' onChange={(e) => onChange(e, 'died')} />
          <label htmlFor='wiki'>Wikipedia link</label>
          <input id='wiki' className='input' type='text' placeholder='Wikipedia link' onChange={(e) => onChange(e, 'wiki')} />
        </div>
        <div className='picture'>
          <UploadAndDisplayImage alt={state.name} onChange={onPictureChange} />
        </div>
      </div>

      <hr />
      <h5>Specials:</h5>
      <For each='special' of={specials} index='special_idx'>
        <AddSpecial key={special_idx} index={special_idx} {...special} edit={editSpecial} delete={delSpecial} />
      </For>
      <button className='btn' onClick={newSpecial}>
        Add special
      </button>

      <hr />
      <button className='btn' disabled={!state.name || !state.country || !state.born || !state.picture || !specialsValid()}>
        Submit
      </button>
    </>
  );
}

export default view(AddComedian);
