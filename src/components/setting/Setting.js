import React, { useEffect, useState } from 'react';
import Input from '../../sections/Input';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { isAuthenticated, updateUserData } from '../../api/auth';
import { API } from '../../config';
import { onGetData } from '../../api';
import {
  getUser,
  updateUser,
  getUserStats,
  getLogo,
  updateLogo,
} from '../../api/shop';
import {
  Alert,
  Icon,
  IconButton,
  Loader,
  Panel,
  PanelGroup,
  Uploader,
} from 'rsuite';

function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 250,
  height: 150,
};

const Setting = () => {
  const { user, token } = isAuthenticated();
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  const [fileInfoIcon, setFileInfoIcon] = useState(null);

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
  const [allDevise, setAllDevise] = useState();

  const [run, setRun] = useState('');

  const { loader, success, error } = state;

  const init = async () => {
    const { firstName, lastName, role, avatar, email } = user;
    setUserData({ firstName, lastName, role, email, avatar });
  };

  const getDevise = async () => {
    const res = await onGetData(`/read/all/devise/${user._id}`);
    setAllDevise(res);
  };

  useEffect(() => {
    init();
    getDevise();
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

  console.log('All', allDevise);

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

        <PanelGroup accordion bordered>
          <Panel header='Account settings' defaultExpanded>
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
                          className={`fa ${
                            loader ? 'fa-spinner' : 'fa-floppy-o '
                          }`}
                          style={{ background: `${loader && 'transparent'}` }}
                        ></i>
                        Sauvegarder
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          <Panel header='Application settings'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body d-flex align-items-center justify-content-center'>
                    <Uploader
                      fileListVisible={false}
                      listType='picture'
                      name='image'
                      action={`${API}/api/update/logo/${user._id}`}
                      onUpload={(file) => {
                        setUploading(true);
                        previewFile(file.blobFile, (value) => {
                          setFileInfo(value);
                        });
                      }}
                      onSuccess={(response, file) => {
                        setUploading(false);
                        Alert.success('Uploaded successfully');
                        console.log(response);
                      }}
                      onError={() => {
                        setFileInfo(null);
                        setUploading(false);
                        Alert.error('Upload failed');
                      }}
                    >
                      <button style={styles}>
                        {uploading && <Loader backdrop center />}
                        {fileInfo ? (
                          <img
                            src={fileInfo}
                            alt='logo'
                            width='100%'
                            height='100%'
                          />
                        ) : (
                          <Icon icon='camera-retro' size='5x' />
                        )}
                      </button>
                    </Uploader>
                  </div>
                  <div className='card-footer d-flex'>Update Logo</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body d-flex align-items-center justify-content-center'>
                    <Uploader
                      fileListVisible={false}
                      listType='picture'
                      name='image'
                      action={`${API}/api/update/icon/${user._id}`}
                      onUpload={(file) => {
                        setUploading(true);
                        previewFile(file.blobFile, (value) => {
                          setFileInfoIcon(value);
                        });
                      }}
                      onSuccess={(response, file) => {
                        setUploading(false);
                        Alert.success('Uploaded successfully');
                        console.log(response);
                      }}
                      onError={() => {
                        setFileInfo(null);
                        setUploading(false);
                        Alert.error('Upload failed');
                      }}
                    >
                      <button style={styles}>
                        {uploading && <Loader backdrop center />}
                        {fileInfoIcon ? (
                          <img
                            src={fileInfoIcon}
                            alt='logo'
                            width='100%'
                            height='100%'
                          />
                        ) : (
                          <Icon icon='camera-retro' size='5x' />
                        )}
                      </button>
                    </Uploader>
                  </div>
                  <div className='card-footer d-flex'>Update Icon</div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' style={{ height: 240 }}>
                  <div className='card-body h-100 overflow-auto'>
                    <ul className='list-group list-group-flush'>
                      {!allDevise && (
                        <Loader
                          backdrop
                          content='loading...'
                          style={{ zIndex: 2 }}
                        />
                      )}
                      {allDevise &&
                        allDevise.map((_) => (
                          <li
                            key={_._id}
                            className='list-group-item d-flex justify-content-between align-items-center'
                          >
                            <span>
                              {_.nom}{' '}
                              <em
                                title='Exchange rate'
                                className='badge badge-indigo'
                              >
                                {_.taux}{' '}
                              </em>
                            </span>
                            <span title='Edit currency'>
                              <IconButton icon={<Icon icon='edit2' />} />
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='card-footer '>
                    <h6 className='float-left'>Currency</h6>
                    <span title='Add new currency' className='float-right'>
                      <IconButton icon={<Icon icon='plus-circle' />} />
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' style={{ height: 240 }}>
                  <div className='card-body h-100 overflow-auto'>
                    <ul className='list-group list-group-flush'>
                      {!allDevise && (
                        <Loader
                          backdrop
                          content='loading...'
                          style={{ zIndex: 2 }}
                        />
                      )}
                      <li
                        key={1}
                        className='list-group-item d-flex justify-content-between align-items-center'
                      >
                        Main Currency{' '}
                        <div>
                          <span className='mr-2'>
                            <em className='text-indigo'>USD </em>
                            <em className='badge badge-indigo'>1 </em>
                          </span>
                          <span title='Edit main currency'>
                            <IconButton icon={<Icon icon='edit2' />} />
                          </span>
                        </div>
                      </li>
                      <li
                        key={2}
                        className='list-group-item d-flex justify-content-between align-items-center'
                      >
                        Delivery radius{' '}
                        <div>
                          <span className='mr-2'>
                            <em className='text-indigo'>5 </em>
                            <em className='badge badge-indigo'>Km </em>
                          </span>
                          <span title='Edit delivery radius'>
                            <IconButton icon={<Icon icon='edit2' />} />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='card-footer '>
                    <h6 className='float-left'>Global config</h6>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        </PanelGroup>

        <Footer />
      </section>
    </Layout>
  );
};

export default Setting;
