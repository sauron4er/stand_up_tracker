import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/rating.css';

function Rating(props) {
  const [state, setState] = useSetState({
    rating: 0
  });

  function editUserRating(rating) {
    setState({rating});
  }

  return (
    <div className='rating'>
      <input className='star star-5' id={`star-5-${props.id}`} type='radio' name='star' onChange={(e) => editUserRating(5)} />
      <label className='star star-5' htmlFor={`star-5-${props.id}`}>
        <i className='bx bx-star' />
      </label>
      <input className='star star-4' id={`star-4-${props.id}`} type='radio' name='star' onChange={(e) => editUserRating(4)} />
      <label className='star star-4' htmlFor={`star-4-${props.id}`}>
        <i className='bx bx-star' />
      </label>
      <input className='star star-3' id={`star-3-${props.id}`} type='radio' name='star' onChange={(e) => editUserRating(3)} />
      <label className='star star-3' htmlFor={`star-3-${props.id}`}>
        <i className='bx bx-star' />
      </label>
      <input className='star star-2' id={`star-2-${props.id}`} type='radio' name='star' onChange={(e) => editUserRating(2)} />
      <label className='star star-2' htmlFor={`star-2-${props.id}`}>
        <i className='bx bx-star' />
      </label>
      <input className='star star-1' id={`star-1-${props.id}`} type='radio' name='star' onChange={(e) => editUserRating(1)} />
      <label className='star star-1' htmlFor={`star-1-${props.id}`}>
        <i className='bx bx-star' />
      </label>
    </div>
  );
}

Rating.defaultProps = {
  id: 0
};

export default Rating;
