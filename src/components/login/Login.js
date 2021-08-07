import 'rsuite/dist/styles/rsuite-default.css';

import React, { useState, useContext } from 'react';
import { authenticate, isAuthenticated, signin } from '../../api/auth';

import { API } from '../../config';
import { Redirect } from 'react-router-dom';
import { GetConfigContext } from '../../ConfigContext';

const Login = () => {
  const [state, setState] = useState({
    error: '',
    email: '',
    password: '',
    loader: false,
    redirect: false,
  });

  const configContext = useContext(GetConfigContext);

  const { logo } = configContext;

  const onCancel = () => {
    setState({ ...state, error: '', email: '', password: '', loader: false });
  };

  const { error, email, password, redirect, loader } = state;

  const handleChange = (prop) => (event) => {
    setState({ ...state, error: false, [prop]: event.target.value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, error: false, loader: true });
    const data = await signin({ email, password });
    if (data.error) {
      setState({ ...state, error: data.error, redirect: false, loader: false });
    } else {
      authenticate(data, () => {
        setState({ ...state, loader: false, redirect: true });
      });
    }
  };

  const redirectUser = (redirect) => {
    if (redirect) {
      return <Redirect to='/' />;
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div
      className='wrapper d-flex align-items-center justify-content-center'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        boxSizing: 'border-box',
        top: 0,
      }}
    >
      {redirectUser(redirect)}
      <div className='row w-100 h-100'>
        <div
          className='col-md-6 bg-primary'
          style={{
            background: 'url(/assets/img/bg.jpg) no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#000',
              position: 'absolute',
              left: 0,
              opacity: ' 0.5',
            }}
          ></div>
          <div className='row h-100 d-flex align-items-center justify-content-center'>
            <div className='col-md-8 text-center'>
              <h2 style={{ lineHeight: '1.6' }}>
                Welcom to <br /> Bienfafood Admin Panel
              </h2>
              <h5 className='p-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
              <div className='text-center m-4'>
                <img
                  alt='icon'
                  src={`${API}/${logo}`}
                  className='img-fluid p-4'
                />
              </div>

              {error && (
                <div
                  class='alert bg-danger alert-dismissible fade show'
                  role='alert'
                >
                  {error}
                  <button
                    type='button'
                    class='close'
                    onClick={onCancel}
                    data-dismiss='alert'
                    aria-label='Close'
                  ></button>
                </div>
              )}
              <form onSubmit={handelSubmit}>
                <div className='form-group'>
                  <label for='exampleuser1'>Email</label>
                  <div className='group-icon'>
                    <input
                      id='exampleuser1'
                      type='text'
                      placeholder='Email'
                      className={`form-control ${error && 'is-invalid'}`}
                      onChange={handleChange('email')}
                      required=''
                      name='email'
                    />
                    <span className='icon-user text-muted icon-input'></span>
                  </div>
                </div>
                <div className='form-group'>
                  <label for='exampleInputPassword1'>Mot de passe</label>
                  <div className='group-icon'>
                    <input
                      id='exampleInputPassword1'
                      type='password'
                      name='password'
                      className={`form-control ${error && 'is-invalid'}`}
                      onChange={handleChange('password')}
                      placeholder='Mot de passe'
                    />
                    <span className='icon-lock text-muted icon-input'></span>
                  </div>
                </div>
                <button
                  type='submit'
                  disabled={loader}
                  style={{ cursor: 'pointer' }}
                  className='btn btn-block btn-primary btn-rounded box-shadow mt-3'
                >
                  <span
                    class='spinner-grow spinner-grow-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                  {loader ? 'Loading...' : 'Connexion'}
                </button>
              </form>
              <div className='text-center m-4'>
                <p className='copyright'>
                  Copyright &copy; {new Date().getFullYear()} Bienfafood App and
                  Designed by{' '}
                  <span>
                    <a
                      id='copyright-link'
                      href='https://uptodatedevelopers.com'
                    >
                      Uptodate Developers
                    </a>
                  </span>{' '}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
