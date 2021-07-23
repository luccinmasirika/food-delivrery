import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../../api/auth';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../api/auth';
import { API } from '../../config';
import { getLogo } from "../../api/shop";


const TopBar = ({ history, window }) => {
  const { user } = isAuthenticated();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    avatar: '',
  });

  const init = async () => {
    const { firstName, lastName, role, avatar } = user;
    setUserData({ firstName, lastName, role, avatar });
  };

  const [logo, setLogo] = useState("")

  useEffect(() => {
    init();
    // (async function(){
    //   const data = await getLogo()
    //   setLogo(data.logo)
    // })()
  }, []);

  const { firstName, lastName, role, avatar } = userData;

  return (
    <div className='top-bar primary-top-bar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <a className='admin-logo' href='/'>
              <h1>
                <img
                  alt='Avatar'
                  // src={`${API}/${logo}`}
                  src="/logo.png"
                  style={{ height: '30px' }}
                  id='logo'
                  className='toggle-none hidden-xs'
                />
              </h1>
            </a>
            <div className='left-nav-toggle'>
              <a href='#' id='toogleMenu' className='nav-collapse'>
                <i className='fa fa-bars' />
              </a>
            </div>
            <div className='left-nav-collapsed'>
              <a href='#' className='nav-collapsed'>
                <i className='fa fa-bars' />
              </a>
            </div>

            <ul className='list-inline top-right-nav'>
              <li className='dropdown avtar-dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' href='#'>
                  <img
                  alt="prodil"
                    className='rounded-circle'
                    src="/assets/img/avtar-4.png"
                    // src={`${API}${avatar}`}
                    width={30}
                  />
                  {firstName} {lastName}
                </a>
                <ul className='dropdown-menu top-dropdown'>
                  <li>
                    <Link
                      className='dropdown-item'
                      to='/setting'
                      className='nav-link'
                    >
                      <i className='icon-settings' />
                      Paramètres
                    </Link>
                  </li>
                  <li className='dropdown-divider' />
                  <li>
                    <a
                      className='dropdown-item'
                      href='#'
                      onClick={() => {
                        signout(() => {
                          history.push('/login');
                        });
                      }}
                    >
                      <i className='icon-logout' /> Se déconnecter
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopBar);
