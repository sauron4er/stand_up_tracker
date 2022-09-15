import React from 'react';
import useSetState from 'components/hooks/useSetState';
import 'static/css/rating.css';

function Expand(props) {
  const [state, setState] = useSetState({
    rating: 0
  });

  function expand() {
    console.log(1);
  }

  return (
    <div className='expand'>
      <input className='expand__input' id={`expand_input-${props.id}`} type='radio' name='star'/>
      <label htmlFor={`expand_input-${props.id}`}>
        <i className='bx bx-expand-alt' onClick={expand} />
      </label>
    </div>
  );
}

Expand.defaultProps = {
  id: -1
};

export default Expand;
