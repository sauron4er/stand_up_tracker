import React, {useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';
import UploadAndDisplayImage from 'templates/components/form/image_uploader';

function AddSpecial(props) {

  function delSpecial() {
    props.delete(props.index);
  }

  // function onChange(e, field) {
  //   setState({[field]: e.target.value});
  // }

  // useEffect(() => {
  //   props.edit(props.index, state)
  // }, [state])

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
            onChange={(e) => props.edit(props.index, 'name', e.target.value)}
            value={props.name}
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
          <UploadAndDisplayImage id={`special_${props.index}`} />
        </div>
      </div>
    </>
  );
}

AddSpecial.defaultProps = {
  index: 0,
  edit: () => {},
  delete: () => {}
};

export default view(AddSpecial);
