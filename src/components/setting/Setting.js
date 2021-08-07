import React, { useEffect, useState, useContext } from 'react';
import Input from '../../sections/Input';
import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { isAuthenticated } from '../../api/auth';
import { GetConfigContext, RunEffectContext } from '../../ConfigContext';
import { API } from '../../config';
import ConfigModal from './ConfigModal';
import DeviseModal from './DeviseModal';
import { onGetData, onUpdateData } from '../../api';
import { onCreateData } from './../../api/index';
import {
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

const Setting = () => {
  const { user, token } = isAuthenticated();
  const configContext = useContext(GetConfigContext);
  const runEffectContext = useContext(RunEffectContext);
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
  const { firstName, lastName, email, role, password, avatar } = userData;

  useEffect(() => {
    (async function () {
      const data = await onGetData(`/user/${user._id}`, token);
      const { firstName, lastName, role, email, avatar } = data;
      setUserData({ firstName, lastName, role, email, avatar });
    })();
  }, []);

  const [state, setState] = useState({
    error: '',
    success: '',
    loading: false,
  });
  const [allDevise, setAllDevise] = useState();
  const [config, setConfig] = useState({
    fraisParKm: configContext.fraisParKm,
    rayonLimite: configContext.rayonLimite,
    devise: '',
    logo: '',
    icon: '',
  });
  const [deviseData, setDeviseData] = useState({
    nom: '',
    taux: '',
    title: '',
    _id: '',
  });
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showDeviseModal, setShowDeviseModal] = useState(false);
  const [runEffect, setRunEffect] = useState('');

  const { fraisParKm, rayonLimite, devise, logo, icon } = configContext;
  const { loading } = state;
  const { title, nom, taux } = deviseData;

  const getDevise = async () => {
    const res = await onGetData(`/read/all/devise/${user._id}`);
    setAllDevise(res);
  };

  function openConfigModal() {
    setShowConfigModal(true);
  }

  function closeConfigModal() {
    setState({ ...state, loading: false, error: '' });
    setConfig({
      devise: '',
      fraisParKm: configContext.fraisParKm,
      rayonLimite: configContext.rayonLimite,
    });
    setShowConfigModal(false);
  }

  function openDeviseModal() {
    setShowDeviseModal(true);
  }

  function closeDeviseModal() {
    setState({ ...state, loading: false, error: '' });
    setDeviseData({ title: '', nom: '', taux: '', _id: '' });
    setShowDeviseModal(false);
  }

  function onEditDevise(data) {
    openDeviseModal();
    setDeviseData({
      ...deviseData,
      title: 'Update currency data',
      nom: data.nom,
      taux: data.taux,
      _id: data._id,
    });
  }

  const handelConfigChanche = (props) => (value) => {
    setConfig({
      ...config,
      [props]: value,
    });
  };

  const handelDeviseChanche = (props) => (value) => {
    setDeviseData({
      ...deviseData,
      [props]: value,
    });
  };

  // const handelChangeUpdate = (props) => (event) => {
  //   setState({ ...state, error: '' });
  //   setUserData({ ...userData, [props]: event.target.value });
  // };

  // const onSubmitUpdate = async (id) => {
  //   const user = { firstName, lastName, email, role, password };
  //   setState({ error: false, success: false, loader: true });
  //   const data = await updateUser(id, token, user);
  //   if (data.error) {
  //     return setState({ ...state, error: data.error, loader: false });
  //   }
  //   init();
  //   setState({ ...state, loader: false, success: true });
  // };

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
        'Done. The realization of this operation was completely successful ',
    });

    setState({ ...state, loading: false, success: res.message });
    runEffectContext();
    setShowConfigModal(false);
  };

  const onSubmitCreateDevise = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/devise/${user._id}`, {
      nom: data.nom,
      taux: data.taux,
    });
    if (res.error) {
      Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description:
          'Done. The realization of this operation was completely successful ',
      });
    }
    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Done. The realization of this operation was completely successful ',
    });
    setState({ ...state, loading: false });
    closeDeviseModal();
    setRunEffect(!runEffect);
  };

  const onSubmitUpdateDevise = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(
      `/update/devise/${user._id}?_id=${data._id}`,
      {
        nom: data.nom,
        taux: data.taux,
      }
    );
    if (res.error) {
      Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description: res.error,
      });
    }
    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Done. The realization of this operation was completely successful ',
    });
    setState({ ...state, loading: false });
    closeDeviseModal();
    setRunEffect(!runEffect);
  };

  useEffect(() => {
    getDevise();
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
          data={configContext}
          showModal={showConfigModal}
          state={state}
          closeModal={closeConfigModal}
          handelChange={handelConfigChanche}
          onSubmit={() =>
            onSubmitUpdateConfig({
              fraisParKm: config.fraisParKm,
              rayonLimite: config.rayonLimite,
            })
          }
        />
        <DeviseModal
          data={deviseData}
          showModal={showDeviseModal}
          state={state}
          closeModal={closeDeviseModal}
          handelChange={handelDeviseChanche}
          onSubmit={() =>
            title
              ? onSubmitUpdateDevise(deviseData)
              : onSubmitCreateDevise(deviseData)
          }
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
                  <div className='card-header card-default'>Update profile</div>
                  <div className='card-body'>
                    <form method='post' className='well well-default'>
                      <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                          <Input
                            icon='fa fa-user'
                            // action={handelChangeUpdate('firstName')}
                            placeholder='Nom'
                            type='text'
                            value={firstName}
                          />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                          <Input
                            icon='fa fa-user'
                            // action={handelChangeUpdate('lastName')}
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
                            // action={handelChangeUpdate('email')}
                            placeholder='Email'
                            type='text'
                            value={email}
                          />
                        </div>
                        <div className='col-md-6 col-sm-12'>
                          <Input
                            icon='fa fa-unlock'
                            // action={handelChangeUpdate('password')}
                            placeholder='Mot de passe'
                            type='text'
                            value={password}
                          />
                        </div>
                      </div>

                      {/* <InputImage action={handelChangeUpdate('')} /> */}
                      <button
                        type='button'
                        // onClick={() => onSubmitUpdate(user._id)}
                        class='btn btn-success btn-icon'
                      >
                        <i
                          className={`fa ${
                            loading ? 'fa-spinner' : 'fa-floppy-o '
                          }`}
                          style={{ background: `${loading && 'transparent'}` }}
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
                        runEffectContext();
                        Notification['success']({
                          title: 'Success',
                          placement: 'bottomEnd',
                          description:
                            'Done. The realization of this operation was completely successful ',
                        });
                      }}
                      onError={() => {
                        setFileInfo(null);
                        setUploading(false);
                        Notification['error']({
                          title: 'Error',
                          placement: 'bottomEnd',
                          description:
                            'Done. The realization of this operation was completely successful ',
                        });
                      }}
                    >
                      <button style={{ width: 250, height: 'auto' }}>
                        {uploading && <Loader backdrop center />}
                        {fileInfo ? (
                          <div
                            style={{
                              margin: '40px',
                              boxSizing: 'border-box',
                            }}
                          >
                            <img
                              src={fileInfo}
                              alt='logo'
                              width='100%'
                              height='auto'
                            />
                          </div>
                        ) : (
                          <div
                            style={{
                              margin: '40px',
                              boxSizing: 'border-box',
                            }}
                          >
                            <img
                              src={`${API}/${logo}`}
                              alt='logo'
                              width='100%'
                              height='auto'
                            />
                          </div>
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
                        setFileInfoIcon(null);
                        runEffectContext();
                        Notification['success']({
                          title: 'Success',
                          placement: 'bottomEnd',
                          description:
                            'Done. The realization of this operation was completely successful ',
                        });
                      }}
                      onError={() => {
                        setFileInfoIcon(null);
                        setUploading(false);
                        setRunEffect(!runEffect);
                        Notification['error']({
                          title: 'Error',
                          placement: 'bottomEnd',
                          description:
                            'Done. The realization of this operation was completely successful ',
                        });
                      }}
                    >
                      <button style={{ width: '100%', height: 'auto' }}>
                        {uploading && <Loader backdrop center />}
                        {fileInfoIcon ? (
                          <div
                            style={{
                              margin: '4px',
                              boxSizing: 'border-box',
                            }}
                          >
                            <img
                              src={fileInfoIcon}
                              alt='logo'
                              width='100%'
                              height='auto'
                            />
                          </div>
                        ) : (
                          <div
                            style={{
                              margin: '4px',
                              boxSizing: 'border-box',
                            }}
                          >
                            <img
                              src={`${API}/${icon}`}
                              alt='logo'
                              width='100%'
                              height='auto'
                            />
                          </div>
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
                                className='badge badge-primary'
                              >
                                {_.taux}{' '}
                              </em>
                            </span>
                            <span title='Edit currency'>
                              <IconButton
                                onClick={() => onEditDevise(_)}
                                icon={<Icon icon='edit2' />}
                              />
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='card-footer '>
                    <h6 className='float-left'>Currency</h6>
                    <span title='Add new currency' className='float-right'>
                      <IconButton
                        onClick={openDeviseModal}
                        icon={<Icon icon='plus-circle' />}
                      />
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
                            <em className='badge badge-primary'>
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
                            <em className='badge badge-primary'>Km </em>
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
                            <em className='badge badge-primary'>Km </em>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='card-footer '>
                    <h6 className='float-left'>Global config</h6>
                    <span title='Add new currency' className='float-right'>
                      <IconButton
                        onClick={openConfigModal}
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
