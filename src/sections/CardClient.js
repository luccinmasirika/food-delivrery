import React from 'react';
import { API } from '../config';
import { isAuthenticated } from '../api/auth';

const CardClient = ({ data, onDisable, onLoad }) => {
  const { user } = isAuthenticated();
  const { firstName, lastName, avatar, disable, stat } = data;

  return (
    <div className='col-md-4 col-xs-12'>
      <div className='card'>
        <div className='card-body text-center'>
          <img
            alt='profile'
            className='rounded-circle margin-b-10'
            src={`${API}/${avatar}`}
            style={{ opacity: `${disable ? 0.5 : 1}` }}
            width={80}
          />
          <p
            className='lead margin-b-0 p-3'
            style={{
              opacity: `${disable ? 0.5 : 1}`,
              textDecoration: `${disable ? 'line-through' : 'none'}`,
            }}
          >
            {firstName} {lastName}
          </p>

          {user.role === 0 && (
            <button
              type='button'
              disabled={onLoad}
              onClick={onDisable}
              className={`btn btn-${disable ? 'success' : 'danger'} btn-icon`}
            >
              <i className={`fa ${disable ? 'fa-check-circle' : 'fa-times'}`}></i>
              {disable ? 'Active' : 'Disable'}
            </button>
          )}
          <hr />
          <ul className='list-unstyled margin-b-0 text-center row'>
            <li className='col-4'>
              <span className='font-600 text-success'>{stat.un}</span>
              <p className='text-success text-sm margin-b-0'>Order paid</p>
            </li>
            <li className='col-4'>
              <span className='font-600 '>{stat.deux}</span>
              <p className='text-muted text-sm margin-b-0'>Order denied</p>
            </li>
            <li className='col-4'>
              <span className='font-600 text-danger'>{stat.trois}</span>
              <p className='text-danger text-sm margin-b-0'>Order canceled</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
