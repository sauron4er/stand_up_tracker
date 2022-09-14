import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';
import EditSpecials from './edit_specials';
import 'static/css/library/edit_comedian.css';
import {axiosPostRequest} from 'templates/components/axios_requests';
import {notify} from 'templates/components/react_toastify_settings';
import {SelectorAsync, TextInput} from 'templates/components/form';
import {Button} from '../../../../templates/components/form/submit_button';

function EditComedian() {
  function onChange(e, field) {
    editComedianState[field] = e.target.value;
  }

  function onPictureChange(file) {
    editComedianState.picture = file;
  }

  function onCountryChange(e) {
    editComedianState.country = e.id;
    editComedianState.country_name = e.name;
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
      <h4>Add or edit comedian1</h4>
      <hr />
      <div className='comedian form'>
        <div className='fields'>
          <TextInput text={editComedianState.name} fieldName='Name' onChange={(e) => onChange(e, 'name')} maxLength={30} autofocus={true} />
          <SelectorAsync
            url='get_countries'
            fieldName='Country'
            onChange={onCountryChange}
            value={{id: editComedianState.country, name: editComedianState.country_name}}
          />

          {/*<label htmlFor='born'>Born</label>*/}
          {/*<input id='born' className='input' type='date' onChange={(e) => onChange(e, 'born')} />*/}
          {/*<label htmlFor='died'>Died</label>*/}
          {/*<input id='died' className='input' type='date' placeholder='Died' onChange={(e) => onChange(e, 'died')} />*/}

          <TextInput text={editComedianState.wiki} fieldName='Wikipedia link' onChange={(e) => onChange(e, 'wiki')} maxLength={200} />
        </div>
        <div className='picture'>
          <UploadAndDisplayImage alt={editComedianState.name} onChange={onPictureChange} />
        </div>
      </div>
      <hr />
      <EditSpecials />
      <hr />
      <div>asd</div>
      <Button
        text='Submit'
        onClick={postComedian}
        disabled={
          !editComedianState.name ||
          !editComedianState.country ||
          !editComedianState.born ||
          !editComedianState.picture ||
          !areSpecialsValid()
        }
      />
    </>
  );
}

export default view(EditComedian);
