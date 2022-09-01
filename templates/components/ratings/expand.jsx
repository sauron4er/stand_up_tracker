import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/rating.css';

function Expand(props) {
  const [state, setState] = useSetState({
    rating: 0
  });

  function expand() {
    console.log(1);
  }

  return (
    <>
      <input className='expand' id='expand' type='radio' name='expand' />
      <label className='star star-5' htmlFor={`star-5-${props.id}`}>
        <i className='bx bx-expand-alt' onClick={expand} />
      </label>
    </>
  );
}

Expand.defaultProps = {
  id: -1
};

export default Expand;
