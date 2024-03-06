import React, {useState} from 'react';
import 'static/css/forms/image_uploader.css';
import {Button} from './submit_button';

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(props.initial);

  function addImage(e) {
    setSelectedImage(e.target.files[0])
    props.onChange(e.target.files[0])
  }

  function removeImage() {
    setSelectedImage(null)
  }

  // console.log(`${window.location.origin}/${selectedImage}`)
  console.log(`${window.location.origin}/files/media/${window.comedian.picture}`)
  console.log(`url(/media/${window.comedian.picture})`)

  //TODO how to retrieve jpg from django? Maybe edit static folder settings?

  return (
    <div className="image_uploader">
      <img alt='1' src={require(`${window.location.origin}/files/media/${window.comedian.picture}`)} />
      {/*<img alt={props.alt} src={URL.createObjectURL(window.comedian.picture)} />*/}
      {/*<img alt={props.alt} src={`url(/files/media/${window.comedian.picture})`} />*/}
      <div className="" style={{
        width: '250px', height: '50px', background: 'red',
        backgroundImage: `url(/media/${window.comedian.picture})`
      }}></div>
      {/*<img alt={props.alt} src={`url(/media/comedians/${window.comedian.picture})`} />*/}
      <If condition={selectedImage}>
        <img alt={props.alt} src={URL.createObjectURL(selectedImage)} />
        <br />
      </If>
      <div className="upload_buttons_container">
        <If condition={selectedImage}>
          <Button
            text="Remove"
            onClick={removeImage}
          />
        </If>

        <label htmlFor={props.id} className="css_button">
          <i className="bx bx-image-add" /> Upload Picture
        </label>
        <input
          id={props.id}
          type="file"
          name="myImage"
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
