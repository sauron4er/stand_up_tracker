import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'templates/hooks/useSetState';

function ContactUs() {
  const [state, setState] = useSetState({

  });

  return (
    <>
      Contact Us
    </>
  );
}

export default view(ContactUs);
