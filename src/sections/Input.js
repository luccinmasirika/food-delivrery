import React from 'react';

const Input = ({icon, placeholder, value, type, action}) => {
  return (
    <div className='form-group'>
      <div className='input-group m-b'>
        <span className='input-group-addon'>
          <i className={icon}></i>
        </span>
        <input type={type} value={value} onChange={action} placeholder={placeholder} className='form-control' />
      </div>
    </div>
  );
};

export default Input;
