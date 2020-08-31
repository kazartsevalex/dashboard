import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { trackTime } from '../../store/actions/index';
import AddTimeForm from '../../components/Forms/AddTimeForm';
import Button from '../../elements/Button';

function AddTime({ id }) {
  const [formVisible, setFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setFormVisible(prev => !prev);
  };

  const dispatch = useDispatch();
  const submitTrackTime = (data) => {
    dispatch(trackTime(data));
    setFormVisible(false);
  };

  const addTimeForm = formVisible ? <AddTimeForm onSubmit={submitTrackTime} id={id} /> : null;
  const text = formVisible ? 'Hide Form' : 'Add Time';

  return (
    <div>
      {addTimeForm}
      <div>
        <Button onClick={toggleFormVisibility}>{text}</Button>
      </div>
    </div>
  )
};

export default AddTime;
