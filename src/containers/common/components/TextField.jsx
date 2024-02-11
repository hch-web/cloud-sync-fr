import React from 'react';
import { FormControl, TextField as MuiTextField } from '@mui/material';
import propTypes from 'prop-types';

function TextField({ name, label }) {
  return (
    <FormControl fullWidth>
      <MuiTextField name={name} label={label} variant="standard" />
    </FormControl>
  );
}

TextField.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default TextField;
