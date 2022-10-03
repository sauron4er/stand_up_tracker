import React from 'react';
import useSetState from 'components/hooks/useSetState';
import 'static/css/rating.css';

function EditButton(props) {
  const [state, setState] = useSetState({
    rating: 0
  });

  function openEditPage() {}

  return (
    <div className='edit'>
      <input className='edit__input' id={`edit_input-${props.id}`} type='radio' name='star' />

      <label htmlFor={`edit_input-${props.id}`}>
        <a href={`edit_comedian/${props.id}`}>
          <i className='bx bx-edit' />
        </a>
      </label>
    </div>
  );
}

EditButton.defaultProps = {
  id: -1
};

export default EditButton;
