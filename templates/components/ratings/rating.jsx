import React from 'react';
import useSetState from 'templates/hooks/useSetState';
import 'static/css/rating.css';

function Rating(props) {
  const [state, setState] = useSetState({
    rating_user: props.rating_user
  });

  const changeUserRating = (rating_user) => {
    props.changeUserRating(rating_user)
    if (rating_user !== state.rating_user) {
      setState({rating_user});
    }
  }

  return (
    <div className='ratings'>
      <div className='global_rating'>
        <i className='bx bxs-star' /> {props?.rating_global}
      </div>
      <div className='user_rating'>
        <form>
          <input
            className='star star-5'
            id={`star-5-${props.id}`}
            type='radio'
            name='star'
            onChange={e => changeUserRating('5')}
            checked={state.rating_user === '5'}
          />
          <label className='star star-5' htmlFor={`star-5-${props.id}`}>
            <i className='bx bx-star' />
          </label>
          <input
            className='star star-4'
            id={`star-4-${props.id}`}
            type='radio'
            name='star'
            onChange={e => changeUserRating('4')}
            checked={state.rating_user === '4'}
          />
          <label className='star star-4' htmlFor={`star-4-${props.id}`}>
            <i className='bx bx-star' />
          </label>
          <input
            className='star star-3'
            id={`star-3-${props.id}`}
            type='radio'
            name='star'
            onChange={e => changeUserRating('3')}
            checked={state.rating_user === '3'}
          />
          <label className='star star-3' htmlFor={`star-3-${props.id}`}>
            <i className='bx bx-star' />
          </label>
          <input
            className='star star-2'
            id={`star-2-${props.id}`}
            type='radio'
            name='star'
            onChange={e => changeUserRating('2')}
            checked={state.rating_user === '2'}
          />
          <label className='star star-2' htmlFor={`star-2-${props.id}`}>
            <i className='bx bx-star' />
          </label>
          <input
            className='star star-1'
            id={`star-1-${props.id}`}
            type='radio'
            name='star'
            onChange={e => changeUserRating('1')}
            checked={state.rating_user === '1'}
          />
          <label className='star star-1' htmlFor={`star-1-${props.id}`}>
            <i className='bx bx-star' />
          </label>
          <If condition={props.with_only_seen}>
            <input
              className='star star-0'
              id={`star-0-${props.id}`}
              type='radio'
              name='star'
              onChange={e => changeUserRating('0')}
              checked={state.rating_user === '0'}
            />
            <label className='star star-0' htmlFor={`star-0-${props.id}`}>
              <i className='bx bx-check-circle' />
            </label>
          </If>
        </form>
      </div>
    </div>
  );
}

Rating.defaultProps = {
  id: 0,
  rating_user: '',
  rating_global: '',
  with_only_seen: false,
  changeUserRating: () => {}
};

export default Rating;
