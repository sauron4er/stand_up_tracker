import React, {useState} from 'react';
import 'static/css/forms/image_uploader.css';
import {Button} from './submit_button';

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  function addImage(e) {
    setSelectedImage(e.target.files[0])
    props.onChange(e.target.files[0])
  }

  function removeImage() {
    setSelectedImage(null)
  }

  return (
    <div className='image_uploader'>
      <If condition={selectedImage}>
        <img alt={props.alt} src={URL.createObjectURL(selectedImage)} />
        <br />
      </If>
      <div className='upload_buttons_container'>
        <If condition={selectedImage}>
          <Button
            text='Remove'
            onClick={removeImage}
          />
        </If>

        <label htmlFor={props.id} className='css_button'>
          <i className='bx bx-image-add' /> Upload Picture
        </label>
        <input
          id={props.id}
          type='file'
          name='myImage'
          onChange={addImage}
        />
      </div>
    </div>
  );
};

UploadAndDisplayImage.defaultProps = {
  id: 0,
  alt: ''
};

export default UploadAndDisplayImage;
