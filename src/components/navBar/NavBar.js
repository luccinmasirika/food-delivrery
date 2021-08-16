import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../api/auth';
import { API } from '../../config';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return 'active';
  }
};

const NavBar = ({ history, window }) => {
  const { user, token } = isAuthenticated();
  const [userData, setUserData] = React.useState({
    firstName: '',
    lastName: '',
    role: '',
    avatar: '',
  });

  function usePersistState(key, defalutValue) {
    const [state, setState] = React.useState(
      localStorage.getItem(key) || defalutValue
    );
    useEffect(() => {
      localStorage.setItem(key, state);
    }, [key, state]);
    return [state, setState];
  }

  const [dropDown, setDropDown] = usePersistState('dropDown', 'none');

  const init = async () => {
    const { firstName, lastName, role, avatar } = user;
    setUserData({ firstName, lastName, role, avatar });
  };

  useEffect(() => {
    init();
  }, []);

  const { firstName, lastName, role, avatar } = userData;

  return (
    <div className='main-sidebar-nav default-navigation'>
      <div className='nano'>
        <div className='nano-content sidebar-nav'>
          <div className='card-body nav-profile'>
            <img src='/assets/img/icon1.png' alt='' srcSet='' width={190} />
          </div>
          <ul className='metisMenu nav flex-column' id='menu'>
            <li className={`nav-item ${isActive(history, '/')}`}>
              <Link to='/' className='nav-link'>
                <i className='fa fa-home' />
                <span className='toggle-none'>Home</span>
              </Link>
            </li>

            <li className='nav-heading'>
              <span>Application Management</span>
            </li>

            <li
              className={`nav-item ${isActive(history, '/type')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/type' className='nav-link'>
                <i className='fa fa-tasks' />
                <span className='toggle-none'>Type </span>
              </Link>
            </li>

            <li
              className={`nav-item ${isActive(history, '/ets')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/ets' className='nav-link'>
                <i className='fa fa-building' />
                <span className='toggle-none'>Establishment </span>
              </Link>
            </li>

            <li
              className={`nav-item ${isActive(history, '/menu')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/menu' className='nav-link'>
                <i className='fa fa-ticket' />
                <span className='toggle-none'>Menu </span>
              </Link>
            </li>

            <li
              className={`nav-item ${isActive(history, '/meal')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/meal' className='nav-link'>
                <i className='fa fa-coffee' />
                <span className='toggle-none'>Meal </span>
              </Link>
            </li>

            <li
              className={`nav-item ${isActive(history, '/order')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/order' className='nav-link'>
                <i className='fa fa-shopping-basket' />
                <span className='toggle-none'>Order </span>
              </Link>
            </li>

            <li className='nav-heading'>
              <span>Website Management</span>
            </li>

            <li
              className={`nav-item ${dropDown === 'active' ? 'active' : ''}`}
              onClick={() => {
                setDropDown(() => (dropDown === 'active' ? 'none' : 'active'));
              }}
            >
              <Link to='#' className='nav-link'>
                <i className='fa fa-th-large' />
                <span className='toggle-none'>
                  Landing Page
                  <span
                    className='fa arrow'
                    style={{ transform: 'rotate(180deg)' }}
                  ></span>
                </span>
              </Link>
            </li>

            <ul
              className='nav-second-level nav flex-column'
              style={{ display: dropDown === 'active' ? 'flex' : 'none' }}
            >
              <li className={`nav-item ${isActive(history, '/banner')}`}>
                <Link to='/banner' className='nav-link'>
                  <span className='toggle-none drop-item'>Banner</span>
                </Link>
              </li>
              <li className={`nav-item ${isActive(history, '/why-choose-us')}`}>
                <Link to='/why-choose-us' className='nav-link'>
                  <span className='toggle-none drop-item'>Why choose us</span>
                </Link>
              </li>
              <li className={`nav-item ${isActive(history, '/features')}`}>
                <Link to='/features' className='nav-link'>
                  <span className='toggle-none drop-item'>Features</span>
                </Link>
              </li>

              <li className={`nav-item ${isActive(history, '/download')}`}>
                <Link to='/download' className='nav-link'>
                  <span className='toggle-none drop-item'>Download</span>
                </Link>
              </li>

              <li className={`nav-item ${isActive(history, '/app-screen')}`}>
                <Link to='/app-screen' className='nav-link'>
                  <span className='toggle-none drop-item'>App screen</span>
                </Link>
              </li>

              <li className={`nav-item ${isActive(history, '/contact-us')}`}>
                <Link to='/contact-us' className='nav-link'>
                  <span className='toggle-none drop-item'>Contact us</span>
                </Link>
              </li>
            </ul>

            {(role === 0 || role === 1) && (
              <li className='nav-heading'>
                <span>User management</span>
              </li>
            )}
            {(role === 0 || role === 1) && (
              <li className={`nav-item ${isActive(history, '/users')}`}>
                <Link to='/users' className='nav-link'>
                  <i className='fa fa-group' />
                  <span className='toggle-none'>User </span>
                </Link>
              </li>
            )}
            <li className='nav-heading'>
              <span>SETTING</span>
            </li>
            <li
              className={`nav-item ${isActive(history, '/setting')}`}
              onClick={() => setDropDown('none')}
            >
              <Link to='/setting' className='nav-link'>
                <i className='fa fa-cogs' />
                <span className='toggle-none'>Setting </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
