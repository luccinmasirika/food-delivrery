import React, { useEffect, useState } from 'react';
import Input from '../../sections/Input';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { isAuthenticated, updateUserData } from '../../api/auth';
import { API } from '../../config';
import {
  getUser,
  updateUser,
  getUserStats,
  getLogo,
  updateLogo,
} from '../../api/shop';

const Setting = () => {
  const { user, token } = isAuthenticated();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    avatar: '',
    email: '',
    password: '',
  });
  const [state, setState] = useState({
    loader: false,
    success: false,
    error: '',
  });

  const [run, setRun] = useState('');

  const { loader, success, error } = state;

  const init = async () => {
    const { firstName, lastName, role, avatar, email } = user;
    setUserData({ firstName, lastName, role, email, avatar });
  };

  useEffect(() => {
    init();
  }, [run]);

  const { firstName, lastName, email, role, avatar, password } = userData;

  const handelChangeUpdate = (props) => (event) => {
    setState({ ...state, error: '' });
    setUserData({ ...userData, [props]: event.target.value });
  };

  const onSubmitUpdate = async (id) => {
    const user = { firstName, lastName, email, role, password };
    setState({ error: false, success: false, loader: true });
    const data = await updateUser(id, token, user);
    console.log('data', data);
    if (data.error) {
      return setState({ ...state, error: data.error, loader: false });
    }
    // updateUserData();
    init();
    setState({ ...state, loader: false, success: true });
  };

  const onClose = () => {
    setState({ ...state, error: '', success: false });
  };

  return (
    <Layout>
      <Header
        parent='Accueil'
        content='Paramètres'
        title='Profile'
        create={false}
      />

      <section className='main-content'>
        {(error || success) && (
          <div
            class={`alert bg-${
              error ? 'danger' : 'success'
            } alert-dismissible fade show`}
            role='alert'
          >
            <strong>{error ? 'Erreur' : 'Succès'}!</strong>{' '}
            {error ? error : 'Profile updated'}
            <button
              type='button'
              class='close'
              onClick={() => onClose()}
              data-dismiss='alert'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        )}
        <div className='card'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='padding-20 text-center'>
                <img
                  alt='Profile'
                  width={140}
                  className='rounded-circle mar-btm margin-b-10 circle-border '
                  src='/assets/img/avtar-4.png'
                  // src={`${API}${avatar}`}
                />
                <p className='lead font-500 margin-b-0'>
                  {firstName} {lastName}
                </p>
                <p className='text-muted'>
                  {role === 0 ? 'Administrator' : 'User'}
                </p>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='card-header card-default'>
                Mettre à jour le profil
              </div>
              <div className='card-body'>
                <form method='post' className='well well-default'>
                  <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                      <Input
                        icon='fa fa-user'
                        action={handelChangeUpdate('firstName')}
                        placeholder='Nom'
                        type='text'
                        value={firstName}
                      />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                      <Input
                        icon='fa fa-user'
                        action={handelChangeUpdate('lastName')}
                        placeholder='Postnom'
                        type='text'
                        value={lastName}
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                      <Input
                        icon='fa fa-at'
                        action={handelChangeUpdate('email')}
                        placeholder='Email'
                        type='text'
                        value={email}
                      />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                      <Input
                        icon='fa fa-unlock'
                        action={handelChangeUpdate('password')}
                        placeholder='Mot de passe'
                        type='text'
                        value={password}
                      />
                    </div>
                  </div>

                  {/* <InputImage action={handelChangeUpdate('')} /> */}
                  <button
                    type='button'
                    onClick={() => onSubmitUpdate(user._id)}
                    class='btn btn-success btn-icon'
                  >
                    <i
                      className={`fa ${loader ? 'fa-spinner' : 'fa-floppy-o '}`}
                      style={{ background: `${loader && 'transparent'}` }}
                    ></i>
                    Sauvegarder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </Layout>
  );
};

export default Setting;
