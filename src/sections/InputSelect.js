import React from 'react';

const InputSelect = ({ value,values, placeholder, action }) => {
  return (
    <div className='form-group'>
      <select
        onChange={action}
        className='form-control'
        value={value}
      >
        <option value=''>{placeholder}</option>
        {values && values.map((_,i)=>(
          <option key={_._id} value={_._id}>{_.name}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

