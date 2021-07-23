import React from 'react';

const ActionButton = ({ cancel, save, loader }) => {
  return (
    <div className='modal-footer'>
      <button
        type='button'
        data-dismiss='modal'
        onClick={cancel}
        disabled={loader}
        style={{ cursor: `${loader ? 'wait' : 'pointer'}`}}
        className='btn btn-danger btn-icon'
      >
        <i className='fa fa-reply'></i>Retour
      </button>
      <button
        type='button'
        onClick={cancel}
        disabled={loader}
        style={{ cursor: `${loader ? 'wait' : 'pointer'}`}}
        className='btn btn-warning btn-icon'
      >
        <i className='fa fa-times-circle'></i>Annuler
      </button>
      <button
        type='button'
        disabled={loader}
        onClick={save}
        style={{ cursor: `${loader ? 'wait' : 'pointer'}`}}
        className='btn btn-success btn-icon'
      >
        <i
          className={`fa ${loader ? 'fa-spinner' : 'fa-floppy-o '}`}
          style={{ background: `${loader && 'transparent'}` }}
        ></i>
        {loader ? 'En cours' : 'Sauvegarder'}
      </button>
    </div>
  );
};

export default ActionButton;
