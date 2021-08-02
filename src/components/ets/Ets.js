import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Header from '../navBar/Header';
import EtsModal from './EtsModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import PaginationTable from './DataTable';
import Footer from '../footer/Footer';
import Filters from './Filters';
import { Alert, Notification } from 'rsuite';
import PlaceholderParagraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';

export default function Ets() {
  const [showModal, setShowModal] = useState(false);
  const { user } = isAuthenticated();

  const [ets, setEts] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    type: '',
    _id: '',
    ouverture: '',
    fermeture: '',
    long: '',
    lat: '',
    update: false,
    formData: new FormData(),
  });
  const [allEts, setAllEts] = useState([]);
  const [allType, setAllType] = useState([]);
  const [paginate, setPaginate] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 10,
  });
  const [state, setState] = useState({
    error: '',
    success: '',
    loading: false,
  });
  const [runEffect, setRunEffect] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    type: '',
    name: '',
  });

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const {
    title,
    image,
    update,
    formData,
    _id,
    type,
    ouverture,
    fermeture,
    long,
    lat,
  } = ets;

  function openModal(title) {
    setEts({ ...ets, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setEts({
      nom: '',
      title: '',
      long: '',
      lat: '',
      ouverture: '',
      fermeture: '',
      description: '',
      type: '',
      image: '',
      formData: new FormData(),
    });
  }

  const handelFilterChange = (props) => (value) => {
    setFilters({
      ...filters,
      [props]: value,
    });
  };
  const handleChange = (value, name) => {
    setState({ ...state, loading: false, error: '' });
    const { nom, description, long, lat } = value;
    setEts({ ...ets, nom, description, long, lat });
    formData.set(name.target.name, name.target.value);
  };

  const handleSelectChange = (value, name) => {
    setState({ ...state, loading: false, error: '' });
    setEts({ ...ets, type: value });
    formData.set('type', value);
  };

  const handleSelectDateChange = (props) => (value) => {
    setState({ ...state, loading: false, error: '' });
    setEts({ ...ets, [props]: value });
    formData.set(props, value);
  };

  const handleImageChange = (value) => {
    setState({ ...state, loading: false, error: '' });
    setEts({
      ...ets,
      image: value[0] && value[0].blobFile,
    });
    formData.set('image', value[0] && value[0].blobFile);
  };

  const handleChangePage = (data) => {
    setPaginate({ ...paginate, page: data });
  };

  const handleChangeLength = (data) => {
    setState({ ...state, loading: true });
    setPaginate({ ...paginate, limit: data, page: 1 });
  };

  const handleEdit = (data) => {
    setState({ ...state, loading: false, error: '' });
    const {
      nom,
      description,
      _id,
      type,
      image,
      ouverture,
      fermeture,
      long,
      lat,
      localisation,
      heure,
    } = data;
    setEts({
      ...ets,
      title: `Update ${nom}`,
      nom,
      description,
      type,
      image,
      ouverture: heure.ouverture,
      fermeture: heure.fermeture,
      long: localisation.long,
      lat: localisation.lat,
      _id,
      update: true,
    });

    setShowModal(true);
  };

  const onDisableUnable = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(`/disableUnable/ets/${user._id}?_id=${id._id}`);

    if (res && res.error) {
      Alert.error(res.error, 3000);
      return setState({
        ...state,
        loading: false,
        error: res.error,
      });
    }

    setRunEffect(!runEffect);
    setState({ ...state, loading: false });
  };

  const onSubmitCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/ets/${user._id}`, data);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }
    Alert.success(res.message, 3000);
    setState({ ...state, loading: false, success: res.message });
    setEts({
      nom: '',
      title: '',
      long: '',
      lat: '',
      ouverture: '',
      fermeture: '',
      description: '',
      type: '',
      image: '',
      formData: new FormData(),
    });
    setShowModal(false);
    setRunEffect(!runEffect);
  };

  const onSubmitUpdate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(`/update/ets/${user._id}?_id=${_id}`, data);

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Le lorem ipsum est, en imprimerie, une suite de mots sans une suite de mots sans ',
    });

    // Alert.success(res.message, 3000);

    setState({ ...state, loading: false, success: res.message });
    setShowModal(false);
    setEts({
      nom: '',
      title: '',
      long: '',
      lat: '',
      ouverture: '',
      fermeture: '',
      description: '',
      type: '',
      image: '',
      formData: new FormData(),
    });
    setRunEffect(!runEffect);
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/ets/${user._id}?limit=${limit}&page=${page}&nom=${
          filters.name
        }&disable=${filters.status || ''}&type=${filters.type || ''}`
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllEts(res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page, filters.name, filters.type, filters.status]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(`/read/all/type/${user._id}?limit=0&page=1`);
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllType(res.data);
      setState({ ...state, loading: false });
    })();
  }, []);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Establishment'
        title='Establishment management'
        text='Create new establishment'
        handelClick={() => openModal('Create Establishment')}
        create={true}
      />

      <section className='main-content'>
        <EtsModal
          title={title}
          data={ets}
          showModal={showModal}
          state={state}
          typeData={allType.map((x) => {
            return { label: x.nom, value: x._id };
          })}
          closeModal={closeModal}
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSelectChange={handleSelectChange}
          handleSelectDateChange={handleSelectDateChange}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />

        <div className='card'>
          <Filters onChange={handelFilterChange} data={allType} />
          <PaginationTable
            data={allEts}
            total={total}
            page={page}
            pages={pages}
            typeData={allType.map((x) => {
              return { label: x.nom, value: x._id };
            })}
            displayLength={limit}
            loading={loading}
            handleChangePage={handleChangePage}
            onDisableUnable={onDisableUnable}
            handleChangeLength={handleChangeLength}
            handleAction={handleEdit}
          />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
