import React from 'react';
import useSetState from 'components/hooks/useSetState';
import 'static/css/rating.css';

function ExpandButton(props) {
  const [state, setState] = useSetState({
    rating: 0
  });

  function expand(e) {
    e.stopPropagation()
  }

  return (
    <div className='expand'>
      <input className='expand__input' id={`expand_input-${props.id}`} type='radio' name='star' />
      <label htmlFor={`expand_input-${props.id}`}>
        <a href={`edit_comedian/${props.id}`} onClick={expand}>
          <i className='bx bx-expand-alt' />
        </a>

      </label>
    </div>
  );
}

ExpandButton.defaultProps = {
  id: -1
};

export default ExpandButton;
