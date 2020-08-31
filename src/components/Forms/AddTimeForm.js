import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

import InputGroup from '../../elements/InputGroup';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

const Form = styled.form`
  padding: 30px 0;
`;

const AddTimeForm = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    props.onSubmit({ ...data, id: props.id });
  };

  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [datestart, setDatestart] = useState(new Date());
  const [dateend, setDateend] = useState(new Date());
  const [totalHours, setTotalHours] = useState(0);
  const [neutralHours, setNeutralHours] = useState(0);
  const [productiveHours, setProductiveHours] = useState(0);
  const [unproductiveHours, setUnproductiveHours] = useState(0);
  const [max, setMax] = useState(0);

  const onChange = (val) => {
    const total = (val[1] - val[0]) / 3600000;
    setTotalHours(total);
    setNeutralHours(total);
    setMax(total);
    setProductiveHours(0);
    setUnproductiveHours(0);
    setDatestart(val[0]);
    setDateend(val[1]);
    setDateRange(val);
  }

  const onProductiveChange = (e) => {
    const productive = parseInt(e.target.value, 10) || 0;
    setProductiveHours(productive);
    setNeutralHours(totalHours - productive - unproductiveHours);
    setMax(totalHours - unproductiveHours);
  }

  const onUnproductiveChange = (e) => {
    const unproductive = parseInt(e.target.value, 10) || 0;
    setUnproductiveHours(unproductive);
    setNeutralHours(totalHours - productiveHours - unproductive);
    setMax(totalHours - productiveHours);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input name="datestart" value={datestart} ref={register({ required: true })} type="hidden" />
      <input name="dateend" value={dateend} ref={register({ required: true })} type="hidden" />
      <input name="total" value={totalHours} ref={register({ required: true })} type="hidden" />
      <input name="neutral" value={neutralHours} ref={register({ required: true })} type="hidden" />
      <InputGroup>
        <label>Select the range</label>
        <DateTimeRangePicker
          onChange={onChange}
          value={dateRange}
          required={true}
        />
      </InputGroup>
      {totalHours !== 0 ?
        <>
          <InputGroup>
            Total hours: {totalHours}<br />
            Neutral hours: {neutralHours}
          </InputGroup>
          <InputGroup>
            <label>Productive time</label>
            <Input
              name="productive"
              type="number"
              min="0"
              max={max}
              step="1"
              value={productiveHours}
              onChange={onProductiveChange}
              ref={register()}
            />
          </InputGroup>
          <InputGroup>
            <label>Unproductive time</label>
            <Input
              name="unproductive"
              type="number"
              min="0"
              max={max}
              step="1"
              value={unproductiveHours}
              onChange={onUnproductiveChange}
              ref={register()}
            />
          </InputGroup>
        </>
      : null}

      <Button type="submit">Add Time</Button>
    </Form>
  )
};

export default AddTimeForm;
