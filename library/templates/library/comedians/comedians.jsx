import React, {useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';
import comediansState from 'library/templates/library/comedians/state';
import Comedian from 'library/templates/library/comedians/comedian';
import 'library/css/comedians_cards.css';
import {Loader} from 'components/form';
import {axiosPostRequest} from 'components/axios_requests';
import {notify} from 'components/react_toastify_settings';

function Comedians() {
  const [state, setState] = useSetState({
    pages_count: 0,
    page: 1,
    filter: '',
    comedians: []
  });

  useEffect(() => {
    let formData = new FormData();
    formData.append('filter', state.filter);
    axiosPostRequest(`get_comedians/${state.page}`, formData)
      .then((response) => {
        setState({
          pages_count: response.pagesCount,
          page: response.page
        })
        comediansState.comedians = response.comedians
        setState({comedians: response.comedians})
      })
      .catch((error) => notify(error));
  }, [state.page])

  return (
    <>
      <h4>Comedians database</h4>
      <div>Search</div>
      {/*<div>Сортування за зірочками або по алфавіту</div>*/}
      {/*<div>Сховати повністю переглянутих</div>*/}
      <Choose>
        <When condition={state.comedians}>
          <ul className='cards'>
            <For each='comedian' of={state.comedians} index='idx'>
              {/*<div key={idx}>1</div>*/}
              <Comedian key={idx} comedian_index={idx} />
            </For>
          </ul>
        </When>
        <Otherwise>
          <Loader />
        </Otherwise>
      </Choose>
    </>
  );
}

export default view(Comedians);
