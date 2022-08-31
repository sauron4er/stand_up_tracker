import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/rating.css';

function Rating(props) {
  const [state, setState] = useSetState({});

  function onClick(e) {
    e.stopPropagation();
  }

  return (
    <div className='rating'>
      <form action=''>
        <input onClick={onClick} className='star star-5' id={`star-5-${props.id}`} type='radio' name='star' />
        <label onClick={onClick} className='star star-5' for={`star-5-${props.id}`}></label>
        <input onClick={onClick} className='star star-4' id={`star-4-${props.id}`} type='radio' name='star' />
        <label onClick={onClick} className='star star-4' for={`star-4-${props.id}`}></label>
        <input onClick={onClick} className='star star-3' id={`star-3-${props.id}`} type='radio' name='star' />
        <label onClick={onClick} className='star star-3' for={`star-3-${props.id}`}></label>
        <input onClick={onClick} className='star star-2' id={`star-2-${props.id}`} type='radio' name='star' />
        <label onClick={onClick} className='star star-2' for={`star-2-${props.id}`}></label>
        <input onClick={onClick} className='star star-1' id={`star-1-${props.id}`} type='radio' name='star' />
        <label onClick={onClick} className='star star-1' for={`star-1-${props.id}`}></label>
      </form>
    </div>
  );
}

Rating.defaultProps = {
  id: 0
};

export default Rating;
