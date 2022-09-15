import React, {useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import UploadAndDisplayImage from 'components/form/image_uploader';
import {SelectorAsync, TextInput, DateInput, DurationInput} from 'components/form';

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

  function onStreamingChange(e) {
    let new_specials = [...editComedianState.specials];
    new_specials[props.index].streaming = e.id;
    new_specials[props.index].streaming_name = e.name;
    editComedianState.specials = new_specials;
  }

  // validation - name, unique name relative to comedian

  return (
    <>
      <div className='special form'>
        <div className='fields'>
          <i className='bx bx-x' onClick={delSpecial}></i>

          <TextInput
            text={editComedianState.specials[props.index].name}
            fieldName='Name'
            onChange={(e) => editSpecial('name', e.target.value)}
            maxLength={30}
            autofocus={true}
          />

          <DurationInput
            hours={editComedianState.specials[props.index].hours}
            minutes={editComedianState.specials[props.index].minutes}
            fieldName='Duration'
            onChange={(hours, minutes) => {
              editSpecial('hours', hours);
              editSpecial('minutes', minutes);
            }}
          />

          <DateInput
            date={editComedianState.specials[props.index].release_date}
            fieldName='Release date'
            onChange={(e) => editSpecial('special_release', e.target.value)}
          />

          <SelectorAsync
            url='get_streamings'
            fieldName='Streaming'
            onChange={onStreamingChange}
            value={{id: editComedianState.specials[props.index].streaming, name: editComedianState.specials[props.index].streaming_name}}
            mainColor='var(--color6)'
          />
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
