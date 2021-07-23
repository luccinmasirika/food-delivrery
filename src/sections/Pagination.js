import React from 'react';

const Pagination = ({ data, action }) => {
  return (
    <div className='row'>
      <div className='col-md-7'>
        <div
          className='dataTables_info'
          id='datatable2_info'
          role='status'
          aria-live='polite'
        >
          Affichage de {data.current} à {data.pages} de {data.count} entrées
        </div>
      </div>
      <div className='col-md-5 flex-end'>
        <div style={{ display: 'flex' }}>
          <button
            type='button'
            disabled={data.current === 1}
            onClick={action(data.current - 1)}
            className='pagination btn btn-sm btn-default'
          >
            <i className='fa fa-angle-left'></i>
          </button>

          <button
            type='button'
            disabled={data.current === 1}
            onClick={action(1)}
            className='pagination btn btn-sm btn-primary'
          >
            1
          </button>
          <button
            type='button'
            disabled={data.current === data.pages}
            onClick={action(data.current + 1)}
            className='pagination btn btn-sm btn-default'
          >
            <i className='fa fa-angle-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
