import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import UploadAndDisplayImage from 'components/form/image_uploader';
import EditSpecials from './edit_specials';
import 'library/css/edit_comedian.css';
import {axiosPostRequest} from 'components/axios_requests';
import {notify} from 'components/react_toastify_settings';
import {SelectorAsync, TextInput, DateInput, Button} from 'components/form';

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

  function postComedian(add_another=false) {
    let formData = new FormData();
    formData.append('comedian', JSON.stringify(editComedianState));
    formData.append('picture', editComedianState.picture);
    editComedianState.specials.map((special, index) => {
      formData.append(`${index}`, special.picture);
    });

    axiosPostRequest('post_comedian', formData)
      .then((response) => {
        editComedianState.id = response;
        console.log(response);
        add_another ? location.reload() : null;
      })
      .catch((error) => notify(error));
  }

  // TODO validation - unique name, born date, at least one special
  // TODO фільтрація країни та стрімінга
  // TODO save and add another

  return (
    <>
      <h2>Add or edit comedian</h2>
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
          <DateInput date={editComedianState.born} fieldName='Born' onChange={(e) => onChange(e, 'born')} />
          <DateInput date={editComedianState.died} fieldName='Died' onChange={(e) => onChange(e, 'died')} />
          <TextInput text={editComedianState.wiki} fieldName='Wikipedia link' onChange={(e) => onChange(e, 'wiki')} maxLength={200} />
        </div>
        <div className='picture'>
          <UploadAndDisplayImage alt={editComedianState.name} onChange={onPictureChange} />
        </div>
      </div>
      <br />
      <hr />
      <EditSpecials />
      <hr />
      <Button
        text='Save'
        onClick={postComedian}
        disabled={
          !editComedianState.name ||
          !editComedianState.country ||
          !editComedianState.born ||
          !editComedianState.picture ||
          !areSpecialsValid()
        }
      />
      <Button
        text='Save and add another'
        onClick={e => postComedian(true)}
        disabled={
          !editComedianState.name ||
          !editComedianState.country ||
          !editComedianState.picture ||
          !areSpecialsValid()
        }
      />
    </>
  );
}

export default view(EditComedian);
