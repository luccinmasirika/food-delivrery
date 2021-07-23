import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        Copyright &copy; {new Date().getFullYear()} Bienfafood and Designed
        by{' '}
        <span>
          <a id='copyright-link' target='_blank' href='https://uptodatedevelopers.com'>
            Uptodate Developers
          </a>
        </span>{' '}
        All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
