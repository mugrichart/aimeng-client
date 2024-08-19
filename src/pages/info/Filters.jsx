

import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SortIcon from '@mui/icons-material/Sort';

export default function Filters({ sort, order, setOrder, setSort}) {

  return (
    <>
    <SortIcon />
    <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Sort by</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <FormControlLabel value="time" control={<Radio />} label="Date" />
        <FormControlLabel value="status" control={<Radio />} label="Severity" />
      </RadioGroup>
    </FormControl>

    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Order</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <FormControlLabel value="ascending" control={<Radio />} label="Ascending" />
        <FormControlLabel value="descending" control={<Radio />} label="Descending" />
      </RadioGroup>
    </FormControl>

    </>
  );
}
