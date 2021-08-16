import React from 'react';

import { Loader } from 'rsuite';

const DataUn = ({ title, number, color, loading }) => {
  return (
    <div className='col-md-6 col-lg-4 col-xlg-2'>
      {loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 2 }} />
      )}
      <div className={`widget card-${color}`}>
        <div className={`box bg-${color} text-center`}>
          <h1 className='font-light text-white'>{number}</h1>
          <h6 className='text-white'>{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default DataUn;
