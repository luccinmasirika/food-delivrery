import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MealModal from './MealModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import { API } from '../../config';
import { Notification } from 'rsuite';

import Filters from './Filters';
import MealModalPreview from './MealModalPreview';

export default function Meal() {
  const [showModal, setShowModal] = useState(false);
  const [showModalPreview, setShowModalPreview] = useState(false);
  const { user, token } = isAuthenticated();

  const [meal, setMeal] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    ets: '',
    menu: '',
    delais: '',
    prix: '',
    _id: '',
    link: '',
    autresImages: [],
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

  const images = [];

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, formData, _id } = meal;

  function openModal(title) {
    setMeal({ ...meal, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setMeal({
      ...meal,
      nom: '',
      titre: '',
      description: '',
      category: '',
      ets: '',
      delais: '',
      prix: '',
      autresImages: [],
      menu: '',
      image: '',
      link: '',
      formData: new FormData(),
    });
  }

  function closeModalPreview() {
    setShowModalPreview(false);
    setState({ ...state, loading: false, error: '' });
    setMeal({
      ...meal,
      nom: '',
      description: '',
      category: '',
      ets: '',
      delais: '',
      prix: '',
      menu: '',
      image: '',
      autresImages: [],
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
    setMeal({ ...meal, nom, description });
    formData.set(name.target.name, name.target.value);
  };

  const handleImageChange = (value) => {
    setState({ ...state, loading: false, error: '' });
    setMeal({
      ...meal,
      image: value[0] && value[0].blobFile,
    });
    meal.formData.set('image', value[0] && value[0].blobFile);
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
      image,
      prix,
      delais,
      ets,
      menu,
      autresImages,
      _id,
    } = data;
    setMeal({
      ...meal,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      image,
      prix,
      delais,
      ets,
      autresImages,
      _id,
      menu,
      update: true,
    });
    setShowModal(true);
  };

  const handlePreview = (data) => {
    setState({ ...state, loading: false, error: '' });
    const {
      nom,
      description,
      image,
      prix,
      delais,
      ets,
      menu,
      disable,
      autresImages,
      _id,
    } = data;
    setMeal({
      ...meal,
      nom,
      description,
      image,
      prix,
      delais,
      disable,
      autresImages,
      ets,
      _id,
      menu,
    });
    setShowModalPreview(true);
  };

  const handleSelectChange = (props) => (value) => {
    setState({ ...state, loading: false, error: '' });
    setMeal({ ...meal, [props]: value });
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
    setMeal({
      ...meal,
      nom: '',
      titre: '',
      description: '',
      menu: '',
      delais: '',
      prix: '',
      ets: '',
      image: '',
      link: `${API}/api/add/images/plat/${user._id}?_id=${res._id}`,
      formData: new FormData(),
    });
    setcurrent(current + 1);
    setRunEffect(!runEffect);
  };

  const onRemoveOthersImages = async (data) => {
    images.push(`images/${data.url.split('images/')[1]}`);
  };

  const onFinish = async () => {
    if (update) {
      setState({ ...state, loading: true });
      const res = await onUpdateData(
        `/pull/plat/images/${user._id}?_id=${_id}`,
        images,
        token
      );
      if (res.error) {
        return Notification['error']({
          title: 'Error',
          placement: 'bottomEnd',
          description: 'Something want wrong + ' + res.error,
        });
      }
      images.length = 0;
      Notification['success']({
        title: 'Success',
        placement: 'bottomEnd',
        description:
          'Done. The realization of this operation was completely successful ',
      });
    }
    setMeal({
      ...meal,
      link: '',
    });
    closeModal();
    setcurrent(0);
    setState({ ...state, loading: false });
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
    setMeal({
      ...meal,
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
          `/read/all/menu/${user._id}?disable=false`,
          token
        );
        const res2 = await onGetData(
          `/read/all/ets/${user._id}?disable=false`,
          token
        );

        if (res && res.error) {
          setMeal({ ...meal, menu: '' });
          setAllMenu([]);
          return setState({
            ...state,
            loading: false,
            error: res.error,
          });
        }

        setAllMenu(res.data);
        setAllEts(res2.data);
        setMeal({ ...meal, menu: '' });
      }

      setState({ ...state, loading: false });
    })();
  }, []);

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
          data={meal}
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
          onRemoveOthersImages={onRemoveOthersImages}
          current={current}
          onFinish={onFinish}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />
        <MealModalPreview
          data={meal}
          state={state}
          showModal={showModalPreview}
          closeModal={closeModalPreview}
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
            handlePreview={handlePreview}
          />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
