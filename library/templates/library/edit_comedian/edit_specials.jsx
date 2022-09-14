import React, {useState, useEffect} from 'react';
import {store, view} from '@risingstack/react-easy-state';
import editComedianState from './state';
import EditSpecial from './edit_special';
import {Button} from '../../../../templates/components/form/submit_button';

function EditSpecials() {

  function newSpecial() {
    let new_specials = [...editComedianState.specials];
    const new_special = {
      id: 0,
      name: '',
      duration: '',
      release_date: '',
      streaming: '',
      picture: '',
      status: 'new',
      valid_filled: false
    };
    new_specials.push(new_special);
    editComedianState.specials = [...new_specials];
  }

  // validation - unique name, born date, at least one special

  return (
    <>
      <h5>Specials:</h5>
      <If condition={editComedianState.specials}>
        <For each='special' of={editComedianState.specials} index='special_idx'>
          <EditSpecial key={special_idx} index={special_idx} {...special} />
        </For>
      </If>
      <Button
        text='Add special'
        onClick={newSpecial}
      />
    </>
  );
}

export default view(EditSpecials);
