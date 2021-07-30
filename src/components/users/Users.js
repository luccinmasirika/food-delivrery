import React, { useState, useEffect } from 'react';
import CardLivreur from '../../sections/CardLivreur';
import CardClient from '../../sections/CardClient';
import CardAdmin from '../../sections/CardAdmin';
import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import ActionButton from '../../sections/ActionButton';
import Input from '../../sections/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import { onCreateData, onGetData } from '../../api';
import { createUser, removeUser, getUser, updateUser } from '../../api/shop';
import { isAuthenticated } from '../../api/auth';
import { Loader, Pagination } from 'rsuite';

const Users = () => {
  const [allUsers, setAllUsers] = useState('');
  const [allClients, setAllClients] = useState('');
  const [allAdmins, setAllAdmins] = useState('');
  const [allLivreurs, setAllLivreurs] = useState('');
  const [update, setUpdate] = useState({
    updateFirstName: '',
    updateLastName: '',
    updateRole: '',
    id: '',
  });

  const [create, setCreate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const [state, setState] = useState({
    error: '',
    success: '',
    loading: false,
  });

  const [paginate, setPaginate] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 10,
  });

  const [runEffect, setRunEffect] = useState(false);
  const [refreshClient, setRefreshClient] = useState(false);
  const [refreshLivreur, setRefreshLivreur] = useState(false);

  const { total, page, pages, limit } = paginate;
  const { loading } = state;

  const { loader, success, error } = state;
  const { firstName, lastName, role, password, email } = create;
  const { updateFirstName, updateLastName, updateRole, id } = update;
  const { user, token } = isAuthenticated();

  const handleChangePage = (data) => {
    setPaginate({ ...paginate, page: data });
  };

  const handleChangeLength = (data) => {
    setState({ ...state, loading: true });
    setPaginate({ ...paginate, limit: data, page: 1 });
  };

  const handelChangeCreate = (props) => (event) => {
    setState({ error: false, success: false, loader: false });
    setCreate({ ...create, [props]: event.target.value });
  };

  const onEdit = async (id) => {
    const data = await getUser(id);
    if (data.error)
      return setState({ error: data.error, loader: false, success: false });
    setUpdate({
      updateFirstName: data.firstName,
      updateLastName: data.lastName,
      updateRole: data.role,
      id: data._id,
    });
  };

  const handelChangeUpdate = (props) => (event) => {
    setState({ error: false, success: false, loader: false });
    setUpdate({ ...update, [props]: event.target.value });
  };

  const onSubmitCreate = async (event) => {
    event.preventDefault();
    setState({ error: false, success: false, loader: true });
    const data = await createUser(token, create);
    if (data.error) return setState({ error: data.error, loader: false });
    setState({ error: false, success: data.message, loader: false });
    setCreate({
      firstName: '',
      lastName: '',
      role: '',
      password: '',
      email: '',
    });
  };

  const onSubmitUpdate = (id) => async (event) => {
    event.preventDefault();
    setState({ error: false, success: false, loader: true });
    const data = await updateUser(id, token, {
      firstName: updateFirstName,
      lastName: updateLastName,
      role: updateRole,
    });
    if (data.error) {
      return setState({ ...state, error: data.error, loader: false });
    }
    setState({ ...state, loader: false, success: data.message });
    setUpdate({
      ...update,
      updateFirstName: data.firstName,
      updateLastName: data.lastName,
      updateRole: data.role,
    });
  };

  const onCancel = () => {
    setCreate({
      firstName: '',
      lastName: '',
      role: '',
      password: '',
      email: '',
    });
    setState({ error: false, success: false, loader: false });
  };

  const createModal = () => (
    <div
      class='modal fade myModal'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myDefaultModalLabel'
    >
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onCancel}
            >
              <span aria-hidden='true' class='fa fa-times'></span>
            </button>
            <h5 class='modal-title' id='myDefaultModalLabel'>
              Nouvel utilisateur
            </h5>
          </div>
          {loader && (
            <LinearProgress color='secondary' style={{ width: '100%' }} />
          )}
          <div class='modal-body'>
            {(error || success) && (
              <div
                class={`alert bg-${
                  error ? 'danger' : 'success'
                } alert-dismissible fade show`}
                role='alert'
              >
                <strong>{error ? 'Erreur' : 'Succès'}!</strong>{' '}
                {error ? error : success}
              </div>
            )}
            <Input
              icon='fa fa-user'
              action={handelChangeCreate('firstName')}
              value={firstName}
              type='text'
              placeholder='Nom'
            />
            <Input
              icon='fa fa-user'
              action={handelChangeCreate('lastName')}
              value={lastName}
              type='text'
              placeholder='Postnom'
            />
            <Input
              icon='fa fa-at'
              action={handelChangeCreate('email')}
              value={email}
              type='text'
              placeholder='Email'
            />
            <Input
              icon='fa fa-unlock'
              action={handelChangeCreate('password')}
              value={password}
              type='password'
              placeholder='Mot de passe'
            />
            {user.role === 0 && (
              <div className='form-group'>
                <select
                  onChange={handelChangeCreate('role')}
                  class='form-control'
                  value={role}
                >
                  <option value=''>Rôle</option>
                  <option value={0}>Administrateur</option>
                  <option value={1}>Distributeur</option>
                  <option value={2}>Vendeur</option>
                </select>
              </div>
            )}
          </div>
          <ActionButton
            save={onSubmitCreate}
            loader={loader}
            cancel={onCancel}
          />
        </div>
      </div>
    </div>
  );

  const updateModal = () => (
    <div
      class='modal fade myModalUpdate'
      tabindex='-1'
      role='dialog'
      aria-labelledby='myDefaultModalLabel'
    >
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onCancel}
            >
              <span aria-hidden='true' class='fa fa-times'></span>
            </button>
            <h5 class='modal-title' id='myDefaultModalLabel'>
              Modifier l'utilisateur
            </h5>
          </div>
          {loader && (
            <LinearProgress color='secondary' style={{ width: '100%' }} />
          )}
          <div class='modal-body'>
            {(error || success) && (
              <div
                class={`alert bg-${
                  error ? 'danger' : 'success'
                } alert-dismissible fade show`}
                role='alert'
              >
                <strong>{error ? 'Erreur' : 'Succès'}!</strong>{' '}
                {error ? error : success}
              </div>
            )}
            <Input
              icon='fa fa-user'
              action={handelChangeUpdate('updateFirstName')}
              value={updateFirstName}
              type='text'
              placeholder='Nom'
            />
            <Input
              icon='fa fa-user'
              action={handelChangeUpdate('updateLastName')}
              value={updateLastName}
              type='text'
              placeholder='Postnom'
            />
            {user._id !== id && (
              <div className='form-group'>
                <select
                  onChange={handelChangeUpdate('updateRole')}
                  class='form-control'
                  value={updateRole}
                >
                  <option value=''>Rôle</option>
                  <option value={0}>Administrateur</option>
                  <option value={1}>Distributeur</option>
                  <option value={2}>Vendeur</option>
                </select>
              </div>
            )}
          </div>
          <ActionButton
            save={onSubmitUpdate(id)}
            loader={loader}
            cancel={onCancel}
          />
        </div>
      </div>
    </div>
  );

  const onDisable = async (id) => {
    setState({ error: false, success: false, loader: true });
    const data = await removeUser(id, token);
    if (data.error) {
      return setState({ error: data.error, success: false, loader: false });
    }
    setState({ error: false, success: false, loader: false });
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/client/${user._id}?limit=${limit}&page=${page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllClients(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/livreur/${user._id}?limit=${limit}&page=${page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllLivreurs(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/admin/${user._id}?limit=${limit}&page=${page}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllAdmins(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page]);

  return (
    <Layout>
      <Header
        parent='Accueil'
        content='Utilisateurs'
        title='Liste de utitlisateurs'
        create={true}
      />
      {createModal()}
      {updateModal()}
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
                              onEdit={() => onEdit(_._id)}
                              onDisable={() => onDisable(_._id)}
                            />
                          );
                        }
                      })}
                    {allClients &&
                      allClients.map((_, i) => {
                        if (_._id !== user._id) {
                          return (
                            <CardClient
                              key={_._id}
                              data={_}
                              onLoad={loader}
                              onEdit={() => onEdit(_._id)}
                              onDisable={() => onDisable(_._id)}
                            />
                          );
                        }
                      })}
                    {allClients &&
                      allClients.map((_, i) => {
                        if (_._id !== user._id) {
                          return (
                            <CardClient
                              key={_._id}
                              data={_}
                              onLoad={loader}
                              onEdit={() => onEdit(_._id)}
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
                      pages={30}
                      maxButtons={5}
                      // activePage={this.state.activePage}
                      // onSelect={this.handleSelect}
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
                              onEdit={() => onEdit(_._id)}
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
                      pages={30}
                      maxButtons={5}
                      // activePage={this.state.activePage}
                      // onSelect={this.handleSelect}
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
                              onEdit={() => onEdit(_._id)}
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
                      pages={30}
                      maxButtons={5}
                      // activePage={this.state.activePage}
                      // onSelect={this.handleSelect}
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
