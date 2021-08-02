import React, { useEffect, useState } from 'react';
import Input from '../../sections/Input';
import Footer from '../footer/Footer';
import { useHistory } from 'react-router';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { isAuthenticated, updateUserData } from '../../api/auth';
import { API } from '../../config';
import ConfigModal from './ConfigModal';
import { onGetData, onUpdateData } from '../../api';
import { getUser, updateUser } from '../../api/shop';
import {
  Alert,
  Icon,
  IconButton,
  Loader,
  Notification,
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
    error: '',
    success: '',
    loading: false,
  });
  const [allDevise, setAllDevise] = useState();
  const [config, setConfig] = useState({
    fraisParKm: 0,
    rayonLimite: 0,
    devise: '',
  });
  const [showModal, setShowModal] = useState(false);

  const [runEffect, setRunEffect] = useState('');

  const { loader, success, error } = state;
  const { fraisParKm, rayonLimite, devise } = config;

  const init = async () => {
    const { firstName, lastName, role, avatar, email } = user;
    setUserData({ firstName, lastName, role, email, avatar });
  };

  const getDevise = async () => {
    const res = await onGetData(`/read/all/devise/${user._id}`);
    setAllDevise(res);
  };
  const getConfig = async () => {
    const res = await onGetData(`/read/config/${user._id}`);
    setConfig({
      fraisParKm: res.fraisParKm,
      rayonLimite: res.rayonLimite,
      devise: res.devise,
    });
  };

  const { firstName, lastName, email, role, avatar, password } = userData;

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
  }

  const handelConfigChande = (props) => (value) => {
    setConfig({
      ...config,
      [props]: value,
    });
  };

  const handelChangeUpdate = (props) => (event) => {
    setState({ ...state, error: '' });
    setUserData({ ...userData, [props]: event.target.value });
  };

  const onSubmitUpdate = async (id) => {
    const user = { firstName, lastName, email, role, password };
    setState({ error: false, success: false, loader: true });
    const data = await updateUser(id, token, user);
    if (data.error) {
      return setState({ ...state, error: data.error, loader: false });
    }
    init();
    setState({ ...state, loader: false, success: true });
  };

  const onSubmitUpdateConfig = async (data) => {
    setState({ ...state, error: '', loading: true });
    const res = await onUpdateData(`/update/config/${user._id}`, data);
    if (res && res.error) {
      setState({ ...state, loading: false, error: res.error });
    }

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Le lorem ipsum est, en imprimerie, une suite de mots sans une suite de mots sans ',
    });
    setState({ ...state, loading: false, success: res.message });
    setRunEffect(!runEffect);
    setShowModal(false);
  };

  useEffect(() => {
    init();
    getDevise();
    getConfig();
  }, [runEffect]);

  return (
    <Layout>
      <Header
        parent='Accueil'
        content='Paramètres'
        title='Profile'
        create={false}
      />

      <section className='main-content'>
        <ConfigModal
          data={config}
          showModal={showModal}
          state={state}
          closeModal={closeModal}
          deviseData={
            allDevise &&
            allDevise.map((x) => {
              return { label: x.nom, value: x._id };
            })
          }
          handelChange={handelConfigChande}
          onSubmit={() => onSubmitUpdateConfig({ fraisParKm, rayonLimite })}
        />

        <PanelGroup accordion bordered>
          <Panel header='Account settings'>
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
          <Panel header='Application settings' defaultExpanded>
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
                            <em className='text-indigo'>
                              {devise && devise.nom}{' '}
                            </em>
                            <em className='badge badge-indigo'>
                              {devise && devise.taux}{' '}
                            </em>
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
                            <em className='text-indigo'>{rayonLimite} </em>
                            <em className='badge badge-indigo'>Km </em>
                          </span>
                        </div>
                      </li>
                      <li
                        key={3}
                        className='list-group-item d-flex justify-content-between align-items-center'
                      >
                        Fee per Km{' '}
                        <div>
                          <span className='mr-2'>
                            <em className='text-indigo'>{fraisParKm}$ </em>
                            <em className='badge badge-indigo'>Km </em>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='card-footer '>
                    <h6 className='float-left'>Global config</h6>
                    <span title='Add new currency' className='float-right'>
                      <IconButton
                        onClick={openModal}
                        icon={<Icon icon='edit2' />}
                      />
                    </span>
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
