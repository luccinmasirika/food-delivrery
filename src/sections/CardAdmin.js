import React, { useEffect, useState } from 'react';
import { API } from '../config';
import { isAuthenticated } from '../api/auth';
import { getUserStats } from '../api/shop';

const CardClient = ({ data, onDisable, onEdit, onLoad }) => {
  const { user, token } = isAuthenticated();
  const { firstName, lastName, role, avatar, disable } = data;

  return (
    <div className='col-md-4 col-xs-12'>
      <div className='widget white-bg text-center'>
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

        <div>
          <a
            href='#'
            data-toggle='modal'
            data-target={`${disable || '.myModalUpdate'}`}
            onClick={onEdit}
            style={{
              margin: '0 5px',
              cursor: `${disable ? 'not-allowed' : 'pointer'}`,
              opacity: `${disable ? 0.5 : 1}`,
            }}
            class='btn btn-info btn-icon'
          >
            <i class='fa fa-edit '></i>Éditer
          </a>
          <button
            type='button'
            disabled={onLoad}
            onClick={onDisable}
            class={`btn btn-${disable ? 'success' : 'danger'} btn-icon`}
          >
            <i class={`fa ${disable ? 'fa-check-circle' : 'fa-times'}`}></i>
            {disable ? 'Active' : 'Disable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
