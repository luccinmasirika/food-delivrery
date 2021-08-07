import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MealModal from './MealModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import { API } from '../../config';
import { Alert, Notification } from 'rsuite';

import Filters from './Filters';

export default function Meal() {
  const [showModal, setShowModal] = useState(false);
  const { user, token } = isAuthenticated();

  const [type, setType] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    ets: '',
    menu: '',
    _id: '',
    link: '',
    formData: new FormData(),
    update: false,
  });
  const [allType, setAllType] = useState([]);
  const [allMenu, setAllMenu] = useState([]);
  const [allEts, setAllEts] = useState([]);
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

  const [filters, setFilters] = useState({
    status: '',
    ets: '',
    menu: '',
    name: '',
    promo: '',
  });

  const [runEffect, setRunEffect] = useState(false);

  const [current, setcurrent] = useState(0);

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, ets, formData, _id } = type;

  function openModal(title) {
    setType({ ...type, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setType({
      ...type,
      nom: '',
      titre: '',
      description: '',
      category: '',
      ets: '',
      menu: '',
      image: '',
      link: '',
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
    const { nom, description } = value;
    setType({ ...type, nom, description });
    formData.set(name.target.name, name.target.value);
  };

  const handleImageChange = (value) => {
    setState({ ...state, loading: false, error: '' });
    setType({
      ...type,
      image: value[0] && value[0].blobFile,
    });
    type.formData.set('image', value[0] && value[0].blobFile);
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
    const { nom, description, image, prix, delais, ets, menu, _id } = data;
    setType({
      ...type,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      image,
      prix,
      delais,
      ets,
      _id,
      menu,
      update: true,
    });
    setShowModal(true);
  };

  const handleSelectChange = (props) => (value) => {
    setState({ ...state, loading: false, error: '' });
    setType({ ...type, [props]: value });
    formData.set(props, value);
  };

  const onPromo = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(`/promo/plat/${user._id}?_id=${id._id}`, token);

    if (res && res.error) {
      Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description:
          'Done. The realization of this operation was completely successful ',
      });
      return setState({
        ...state,
        loading: false,
        error: res.error,
      });
    }

    setRunEffect(!runEffect);
    setState({ ...state, loading: false });
  };

  const onDisableUnable = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(
      `/disableUnable/plat/${user._id}?_id=${id._id}`,
      token
    );

    if (res && res.error) {
      Notification['error']({
        title: 'Error',
        placement: 'bottomEnd',
        description:
          'Done. The realization of this operation was completely successful ',
      });
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
    const res = await onCreateData(`/create/plat/${user._id}`, data, token);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Done. The realization of this operation was completely successful ',
    });

    setState({ ...state, loading: false, success: res.message });
    setType({
      ...type,
      nom: '',
      titre: '',
      description: '',
      category: '',
      ets: '',
      image: '',
      link: `${API}/api/add/images/plat/${user._id}?_id=${res._id}`,
      formData: new FormData(),
    });
    setcurrent(current + 1);
    setRunEffect(!runEffect);
  };

  const onFinish = () => {
    setType({
      ...type,
      link: '',
    });
    setShowModal(false);
    setRunEffect(!runEffect);
  };

  const onSubmitUpdate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(
      `/update/plat/${user._id}?_id=${_id}`,
      data,
      token
    );
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Done. The realization of this operation was completely successful ',
    });

    setState({ ...state, loading: false, success: res.message });
    setType({
      ...type,
      nom: '',
      titre: '',
      description: '',
      category: '',
      ets: '',
      image: '',
      link: `${API}/api/add/images/plat/${user._id}?_id=${_id}`,
      formData: new FormData(),
    });
    setcurrent(current + 1);
    setRunEffect(!runEffect);
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/plat/${user._id}?limit=${limit}&page=${page}&nom=${
          filters.name
        }&disable=${filters.status || ''}&promo=${filters.promo || ''}&ets=${
          filters.ets || ''
        }&menu=${filters.menu || ''}`,
        token
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllType(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [
    limit,
    runEffect,
    page,
    filters.name,
    filters.ets,
    filters.menu,
    filters.status,
    filters.promo,
  ]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      if (!update) {
        const res = await onGetData(
          `/read/all/menu/${user._id}?disable=false&ets=${ets || ''}`,
          token
        );
        const res2 = await onGetData(
          `/read/all/ets/${user._id}?disable=false`,
          token
        );

        if (res && res.error) {
          setType({ ...type, menu: '' });
          setAllMenu([]);
          return setState({
            ...state,
            loading: false,
            error: res.error,
          });
        }

        setAllMenu(res.data);
        setAllEts(res2.data);
        setType({ ...type, menu: '' });
      }

      setState({ ...state, loading: false });
    })();
  }, [ets]);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Meal'
        title='Meal management'
        text='Create new meal'
        handelClick={() => openModal('Create meal')}
        create={true}
      />

      <section className='main-content'>
        <MealModal
          title={title}
          data={type}
          showModal={showModal}
          state={state}
          closeModal={closeModal}
          etsData={allEts.map((x) => {
            return { label: x.nom, value: x._id };
          })}
          menuData={allMenu.map((x) => {
            return { label: x.nom, value: x._id };
          })}
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSelectChange={handleSelectChange}
          current={current}
          onFinish={onFinish}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />
        <div className='card'>
          <Filters
            onChange={handelFilterChange}
            data={allEts}
            data2={allMenu}
          />
          <PaginationTable
            data={allType}
            total={total}
            page={page}
            pages={pages}
            displayLength={limit}
            loading={loading}
            onPromo={onPromo}
            onDisableUnable={onDisableUnable}
            handleChangePage={handleChangePage}
            handleChangeLength={handleChangeLength}
            handleAction={handleEdit}
          />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
