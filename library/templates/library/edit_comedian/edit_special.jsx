import React, {useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';

function EditSpecial(props) {
  function editSpecial(field_name, value) {
    let new_specials = [...editComedianState.specials];
    new_specials[props.index][field_name] = value;
    editComedianState.specials = new_specials;
  }

  function delSpecial() {
    let new_specials = [...editComedianState.specials];
    new_specials.splice(props.index, 1);
    editComedianState.specials = new_specials;
  }

  function onPictureChange(file) {
    editComedianState.specials[props.index].picture = file;
  }

  console.log(editComedianState);

  // validation - name, unique name relative to comedian

  return (
    <>
      <div className='special form'>
        <div className='fields'>
          <i className='bx bx-x' onClick={delSpecial}></i>
          <label htmlFor='special_name'>Name</label>
          <input
            id='special_name'
            className='input'
            type='text'
            placeholder='Name'
            autoFocus
            onChange={(e) => editSpecial('name', e.target.value)}
            value={editComedianState.specials[props.index].name}
          />
          <div className='input_duration'>
            <span id='duration'>Duration:</span>
            <input id='h' name='h' type='number' min='0' max='24' />
            <label htmlFor='h'>h</label>
            <input id='m' name='m' type='number' min='0' max='59' />
            <label htmlFor='m'>m</label>
          </div>
          <label htmlFor='special_release'>Release date</label>
          <input id='special_release' className='input' type='date' placeholder='Release date' />
          <label htmlFor='special_streaming'>Streaming</label>
          <input id='special_streaming' className='input' type='text' placeholder='Streaming' />
        </div>
        <div className='picture'>
          <UploadAndDisplayImage
            alt={editComedianState.specials[props.index].name}
            onChange={onPictureChange}
            id={`special_${props.index}`}
          />
        </div>
      </div>
    </>
  );
}

EditSpecial.defaultProps = {
  index: 0
};

export default view(EditSpecial);
