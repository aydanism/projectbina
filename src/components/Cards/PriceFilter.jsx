import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./PriceFilter.css"

function PriceFilter() {
    const [price, setPrice] = useState({ min: 0, max: Infinity });
 
  const handleChange = (event) => {
    setPrice({
      ...price,
      [event.target.name]: event.target.value === '' ? 
        (event.target.name === 'min' ? 0 : Infinity) : 
        event.target.value
    });
  };
  return (
    <div className='price-filter'>
      <TextField
        name="min"
        label="min"
        value={price.min}
        onChange={handleChange}
        style={{border:"1px solid lightgrey",backgroundColor:"white"}}
      />
      <TextField
        name="max"
        label="max"
        value={price.max}
        onChange={handleChange}
        style={{border:"1px solid lightgrey",backgroundColor:"white"}}
      />
    </div>
  );
}

export default PriceFilter;
