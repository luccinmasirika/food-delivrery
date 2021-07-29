import React from 'react';

const Header = ({ parent, title, content, create, handelClick }) => {
  return (
    <div className='row page-header'>
      <div className='col-md-6 align-self-center'>
        <h2>{title}</h2>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>{parent}</a>
          </li>
          <li className='breadcrumb-item active'>{content}</li>
        </ol>
      </div>
      {create && (
        <div className='col-md-6 align-self-center text-right'>
          <button
            href='#'
            data-toggle='modal'
            data-target='.myModal'
            onClick={handelClick}
            className='btn btn-success box-shadow btn-icon btn-rounded'
          >
            <i className='fa fa-plus' /> Create new
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
