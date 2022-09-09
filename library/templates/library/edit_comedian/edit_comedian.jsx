import React, {useState, useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';
import EditSpecials from './edit_specials';
import 'static/css/library/edit_comedian.css';
import {axiosPostRequest} from 'templates/components/axios_requests';
import {notify} from 'templates/components/react_toastify_settings';

function EditComedian() {

  function onChange(e, field) {
    editComedianState[field] = e.target.value;
  }

  function onPictureChange(file) {
    editComedianState.picture = file;
  }

  function areSpecialsValid() {
    if (!editComedianState.specials.length) return false;
    else {
      for (const special of editComedianState.specials) {
        if (!special.name) return false;
      }
      return true;
    }
  }

  function postComedian() {
    let formData = new FormData();
    formData.append('comedian', JSON.stringify(editComedianState));
    formData.append('picture', editComedianState.picture);
    editComedianState.specials.map((special, index) => {
      formData.append(`${index}`, special.picture);
    });

    axiosPostRequest('post_comedian', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => notify(error));
  }

  // validation - unique name, born date, at least one special

  return (
    <>
      <h4>Add or edit comedian</h4>
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
          <UploadAndDisplayImage alt={editComedianState.name} onChange={onPictureChange} />
        </div>
      </div>
      <hr />
      <EditSpecials />
      <hr />
      <button
        className='btn'
        disabled={
          !editComedianState.name ||
          !editComedianState.country ||
          !editComedianState.born ||
          !editComedianState.picture ||
          !areSpecialsValid()
        }
        onClick={postComedian}
      >
        Submit
      </button>
    </>
  );
}

export default view(EditComedian);
