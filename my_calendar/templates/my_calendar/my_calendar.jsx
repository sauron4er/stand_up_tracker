import React from 'react';
import {store, view} from '@risingstack/react-easy-state';
import useSetState from 'components/hooks/useSetState';

function MyCalendar() {
  const [state, setState] = useSetState({

  });

  return (
    <>
     My Calendar
    </>
  );
}

export default view(MyCalendar);
