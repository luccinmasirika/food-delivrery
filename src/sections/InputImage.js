import React from 'react';

const InputImage = ({ action }) => {
  return (
    <div className='form-group'>
      <div
        className='fileinput input-group col-md-12 fileinput-new'
        data-provides='fileinput'
      >

        <span className='input-group-addon btn-file '>
          <span className='fileinput-new'>
            <i className='fa fa-picture-o'></i>
          </span>
          <span className='fileinput-exists'><i className="fa fa-edit"></i></span>
          <input type='hidden' defaultValue name='image' />
          <input type='file' onChange={action} name />
        </span>
        <a
          href='#'
          className='input-group-addon btn btn-danger  hover fileinput-exists'
          data-dismiss='fileinput'
        >
          <i className="fa fa-trash"></i>
        </a>
        <div className='form-control' data-trigger='fileinput'>
          <span className='fileinput-filename' />
        </div>
      </div>
    </div>
  );
};

export default InputImage;
