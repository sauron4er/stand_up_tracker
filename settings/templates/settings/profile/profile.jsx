import React, {useEffect} from 'react';
import useSetState from 'templates/hooks/useSetState';
import {axiosGetRequest} from 'templates/components/axios_requests';
import {notify} from 'templates/components/react_toastify_settings';
import { Loader } from "templates/components/form";
import 'css/profile.css'
import EditProfile from './edit_profile';

function Profile() {
  const [state, setState] = useSetState({
    loading: false, //TODO !!! true
    user: {}
  });

  useEffect(() => {
    axiosGetRequest(`get_profile/${window.user_id}/`)
      .then((response) => {
        setState({
          user: response,
          loading: false
        });
      })
      .catch((error) => notify(error));
  }, [window.user_id]);

  function reload() {
    window.location.reload();
  }

  return (
    <Choose>
      <When condition={!state.loading}>
        <EditProfile user={state.user} reload={reload} is_staff={window.is_staff} />
      </When>
      <Otherwise>
        <Loader />
      </Otherwise>
    </Choose>
  );
}

export default Profile;
