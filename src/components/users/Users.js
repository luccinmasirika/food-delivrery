/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react';
import CardLivreur from '../../sections/CardLivreur';
import CardClient from '../../sections/CardClient';
import CardAdmin from '../../sections/CardAdmin';
import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import emailjs from 'emailjs-com';
import { isAuthenticated } from '../../api/auth';
import { API, SERVICE_TEMPLATE, SERVICE_EMAIL, USER_ID } from '../../config';
import { Loader, Notification, Pagination } from 'rsuite';
import UserModal from './UserModal';

const Users = () => {
  const [allClients, setAllClients] = useState('');
  const [allAdmins, setAllAdmins] = useState('');
  const [allLivreurs, setAllLivreurs] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [create, setCreate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 0,
    telephone: '',
    sexe: '',
    idPiece: '',
    image: '',
    adresse: '',
    formData: new FormData(),
  });

  const [state, setState] = useState({
    error: '',
    success: '',
    loading: false,
  });

  const [paginateClient, setPaginateClient] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 10,
  });

  const [paginateLivreur, setPaginateLivreur] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 10,
  });

  const [paginateAdmin, setPaginateAdmin] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 10,
  });

  const [runEffect, setRunEffect] = useState(false);

  const { loading } = state;

  const { loader, success, error } = state;
  const {
    firstName,
    lastName,
    role,
    password,
    email,
    sexe,
    idPiece,
    image,
    adresse,
    telephone,
    formData,
  } = create;
  const { user, token } = isAuthenticated();

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setCreate({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 0,
      telephone: '',
      sexe: '',
      idPiece: '',
      image: '',
      adresse: '',
      formData: new FormData(),
    });
  }

  const handleChangePageClient = (data) => {
    setPaginateClient({ ...paginateClient, page: data });
  };

  const handleChangePageLivreur = (data) => {
    setPaginateLivreur({ ...paginateLivreur, page: data });
  };

  const handleChangePageAdmin = (data) => {
    setPaginateAdmin({ ...paginateAdmin, page: data });
  };

  const handleChange = (value, name) => {
    setState({ ...state, loading: false, error: '' });
    const { firstName, lastName, email, password } = value;
    setCreate({
      ...create,
      firstName,
      lastName,
      email,
      password,
    });
    formData.set(name.target.name, name.target.value);
  };

  const handleRoleChange = (value, name) => {
    setState({ ...state, loading: false, error: '' });
    setCreate({ ...create, role: value });
    formData.set('role', value);
  };

  const handleSexeChange = (value, name) => {
    setState({ ...state, loading: false, error: '' });
    setCreate({ ...create, sexe: value });
    formData.set('sexe', value);
  };

  const handleImageChange = (value) => {
    setState({ ...state, loading: false, error: '' });
    setCreate({
      ...create,
      image: value[0] && value[0].blobFile,
    });
    formData.set('image', value[0] && value[0].blobFile);
  };

  const onSubmitCreate = (data) => async (event) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`${API}/api/user/${user._id}`, data, token);
    if (res.error) {
      setState({ ...state, loading: false });
      return Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description: 'Something want wrong + ' + res.error,
      });
    }

    setState({ error: false, success: false, loader: true });
    closeModal();
    setRunEffect(!runEffect);
  };

  const onSubmitCreateLivreur = (data) => async (event) => {
    event.preventDefault();
    setState({ ...state, loading: true });
    const res = await onCreateData(
      `${API}/api/livreur/signup/${user._id}`,
      data,
      token
    );
    if (res.error) {
      setState({ ...state, loading: false });
      return Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description: 'Something want wrong + ' + res.error,
      });
    }

    emailjs
      .send(
        SERVICE_EMAIL,
        SERVICE_TEMPLATE,
        {
          to_name: firstName,
          to_email: email,
          to_password: password,
        },
        USER_ID
      )
      .then(
        (result) => {
          setState({ ...state, loading: false });
          setState({ error: false, success: false, loader: true });
          closeModal();
          setRunEffect(!runEffect);
          console.log(result.text);
          return Notification['success']({
            title: 'Success',
            placement: 'bottomEnd',
            description:
              'Done. The realization of this operation was completely successful',
          });
        },
        (error) => {
          setState({ ...state, loading: false });
          console.log(error.text);
          return Notification['error']({
            title: 'Error',
            placement: 'bottomEnd',
            description: 'Something want wrong + ' + error.text,
          });
        }
      );
  };

  const onDisable = async (id) => {
    setState({ ...state, loading: true });
    setState({ error: false, success: false, loader: true });
    const res = await onUpdateData(`${API}/api/user/${id}`, token);
    if (res.error) {
      setState({ ...state, loading: false });
      return Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description: 'Something want wrong + ' + res.error,
      });
    }
    setState({ error: false, success: false, loader: false });
    setRunEffect(!runEffect);
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/client/${user._id}?limit=${paginateClient.limit}&page=${paginateClient.page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllClients(res && res.data);
      setPaginateClient({
        ...paginateClient,
        total: res.total,
        page: res.page,
        pages: res.pages,
      });
      setState({ ...state, loading: false });
    })();
  }, [paginateClient.limit, runEffect, paginateClient.page]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/livreur/${user._id}?limit=${paginateLivreur.limit}&page=${paginateLivreur.page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllLivreurs(res && res.data);
      setPaginateLivreur({
        ...paginateLivreur,
        total: res.total,
        page: res.page,
        pages: res.pages,
      });
      setState({ ...state, loading: false });
    })();
  }, [paginateLivreur.limit, runEffect, paginateLivreur.page]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/admin/${user._id}?limit=${paginateAdmin.limit}&page=${paginateAdmin.page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllAdmins(res && res.data);
      setPaginateAdmin({
        ...paginateAdmin,
        total: res.total,
        page: res.page,
        pages: res.pages,
      });
      setState({ ...state, loading: false });
    })();
  }, [paginateAdmin.limit, runEffect, paginateAdmin.page]);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Users'
        title='Users management'
        text='Create new user'
        handelClick={() => openModal()}
        create={true}
      />
      <UserModal
        data={create}
        showModal={showModal}
        state={state}
        roleData={[
          { label: 'Admin', value: 0 },
          { label: 'Delivrery Man', value: 2 },
        ]}
        sexeData={[
          { label: 'Mascular', value: 'M' },
          { label: 'Femele', value: 'F' },
        ]}
        closeModal={closeModal}
        btnStatus={image ? true : false}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleRoleChange={handleRoleChange}
        handleSexeChange={handleSexeChange}
        onSubmit={
          role === 2
            ? onSubmitCreateLivreur(formData)
            : onSubmitCreate(formData)
        }
      />
      <section className='main-content'>
        <div className='card'>
          <div className='card-body'>
            <div className='tabs'>
              {/* Nav tabs */}
              <ul className='nav nav-tabs justify-content-around'>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link text-tab active'
                    href='#home'
                    aria-controls='home'
                    role='tab'
                    data-toggle='tab'
                    aria-selected='true'
                  >
                    Clients
                  </a>
                </li>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link text-tab'
                    href='#profile'
                    aria-controls='profile'
                    role='tab'
                    data-toggle='tab'
                    aria-selected='false'
                  >
                    Delivery persons
                  </a>
                </li>
                <li className='nav-item' role='presentation'>
                  <a
                    className='nav-link text-tab'
                    href='#messages'
                    aria-controls='messages'
                    role='tab'
                    data-toggle='tab'
                    aria-selected='false'
                  >
                    Admin
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className='tab-content'>
                {loading && (
                  <Loader backdrop content='loading...' style={{ zIndex: 2 }} />
                )}
                <div role='tabpanel' className='tab-pane active' id='home'>
                  <div
                    className='row'
                    style={{ position: 'relative', minHeight: 400 }}
                  >
                    {allClients &&
                      allClients.map((_, i) => {
                        if (_._id !== user._id) {
                          return (
                            <CardClient
                              key={_._id}
                              data={_}
                              onLoad={loader}
                              onDisable={() => onDisable(_._id)}
                            />
                          );
                        }
                      })}
                  </div>
                  <div className=''>
                    <Pagination
                      prev={true}
                      next={true}
                      first={true}
                      last={true}
                      ellipsis={true}
                      boundaryLinks={true}
                      activePage={1}
                      pages={paginateClient.pages}
                      maxButtons={5}
                      onSelect={handleChangePageClient}
                    />
                  </div>
                </div>
                <div role='tabpanel' className='tab-pane' id='profile'>
                  <div
                    className='row'
                    style={{ position: 'relative', minHeight: 400 }}
                  >
                    {allLivreurs &&
                      allLivreurs.map((_, i) => {
                        if (_._id !== user._id) {
                          return (
                            <CardLivreur
                              key={_._id}
                              data={_}
                              onLoad={loader}
                              onDisable={() => onDisable(_._id)}
                            />
                          );
                        }
                      })}
                  </div>
                  <div className=''>
                    <Pagination
                      prev={true}
                      next={true}
                      first={true}
                      last={true}
                      ellipsis={true}
                      boundaryLinks={true}
                      activePage={1}
                      pages={paginateLivreur.pages}
                      maxButtons={5}
                      onSelect={handleChangePageLivreur}
                    />
                  </div>
                </div>
                <div role='tabpanel' className='tab-pane' id='messages'>
                  <div
                    className='row'
                    style={{ position: 'relative', minHeight: 400 }}
                  >
                    {allAdmins &&
                      allAdmins.map((_, i) => {
                        if (_._id !== user._id) {
                          return (
                            <CardAdmin
                              key={_._id}
                              data={_}
                              onLoad={loader}
                              onDisable={() => onDisable(_._id)}
                            />
                          );
                        }
                      })}
                  </div>
                  <div className=''>
                    <Pagination
                      prev={true}
                      next={true}
                      first={true}
                      last={true}
                      ellipsis={true}
                      boundaryLinks={true}
                      activePage={1}
                      pages={paginateAdmin.pages}
                      maxButtons={5}
                      onSelect={handleChangePageAdmin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </Layout>
  );
};

export default Users;
