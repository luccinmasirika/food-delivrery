import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='misc-wrapper'>
      <div className='misc-content'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <div className='misc-box text-center'>
                <h1 className='text-muted fs-large'>404</h1>
                <h4 className='font-300'>
                  The page you are looking for it's not exist
                </h4>
                <Link
                  to='/'
                  className='btn btn-lg btn-primary btn-rounded box-shadow mt-10'
                >
                  Go back home
                </Link>
              </div>
              <div className='text-center misc-footer'>
                <p>
                  Copyright &copy; {new Date().getFullYear()} Bienfafood and
                  Designed by{' '}
                  <span>
                    <a
                      id='copyright-link'
                      href='https://uptodatedevelopers.com'
                    >
                      Uptodate Developpers
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

export default NoMatch;
