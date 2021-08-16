import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MenuModal from './MenuModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import Filters from './Filters';
import { Notification } from 'rsuite';
import MenuModalPreview from './MenuModalPreview';

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [showModalPreview, setShowModalPreview] = useState(false);
  const { user, token } = isAuthenticated();

  const [menu, setMenu] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    _id: '',
    formData: new FormData(),
    update: false,
  });
  const [allMenu, setAllMenu] = useState([]);
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
    name: '',
  });
  const [runEffect, setRunEffect] = useState(false);

  const { loading, error } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, formData, _id } = menu;

  function openModal(title) {
    setMenu({ ...menu, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setMenu({
      ...menu,
      title: '',
      nom: '',
      description: '',
      image: '',
      ets: '',
      update: false,
      _id: '',
      formData: new FormData(),
    });
  }

  function closeModalPreview() {
    setShowModalPreview(false);
    setState({ ...state, loading: false, error: '' });
    setMenu({
      ...menu,
      nom: '',
      description: '',
      image: '',
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
    setMenu({ ...menu, nom, description });
    formData.set(name.target.name, name.target.value);
  };

  const handleImageChange = (value) => {
    setState({ ...state, loading: false, error: '' });
    setMenu({
      ...menu,
      image: value[0] && value[0].blobFile,
    });
    menu.formData.set('image', value[0] && value[0].blobFile);
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
    const { nom, description, _id, category, ets, image } = data;
    setMenu({
      ...menu,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      category,
      image,
      ets,
      _id,
      update: true,
    });
    setShowModal(true);
  };

  const handlePreview = (data) => {
    setState({ ...state, loading: false, error: '' });
    const { nom, description, image } = data;
    setMenu({
      ...menu,
      nom,
      description,
      image,
    });
    setShowModalPreview(true);
  };

  const handleSelectChange = (props) => (value) => {
    setState({ ...state, loading: false, error: '' });
    setMenu({ ...menu, [props]: value });
    formData.set(props, value);
  };

  const onSubmitCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/menu/${user._id}`, data, token);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Done. The realization of this operation was completely successful',
    });

    setState({ ...state, loading: false, success: res.message });
    setMenu({
      ...menu,
      nom: '',
      titre: '',
      description: '',
      ets: '',
      image: '',
      formData: new FormData(),
    });
    setShowModal(false);
    setRunEffect(!runEffect);
  };

  const onSubmitUpdate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(
      `/update/menu/${user._id}?_id=${_id}`,
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
        'Done. The realization of this operation was completely successful',
    });
    setState({ ...state, loading: false, success: res.message });
    setMenu({
      ...menu,
      nom: '',
      titre: '',
      description: '',
      ets: '',
      image: '',
      _id: '',
      update: false,
      formData: new FormData(),
    });
    setShowModal(false);
    setRunEffect(!runEffect);
  };

  const onDisableUnable = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(
      `/disableUnable/menu/${user._id}?_id=${id._id}`,
      token
    );

    if (res && res.error) {
      Notification['error']({
        title: 'Denied',
        placement: 'bottomEnd',
        description: res.error,
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

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/menu/${user._id}?limit=${limit}&page=${page}&nom=${
          filters.name
        }&disable=${filters.status || ''}`,
        token
      );

      setAllMenu(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page, filters.name, filters.status]);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Menu'
        title='Menu management'
        text='Create new menu'
        handelClick={() => openModal('Create a menu')}
        create={true}
      />

      <section className='main-content'>
        <MenuModal
          title={title}
          data={menu}
          showModal={showModal}
          state={state}
          closeModal={closeModal}
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSelectChange={handleSelectChange}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />
        <MenuModalPreview
          data={menu}
          showModal={showModalPreview}
          state={state}
          closeModal={closeModalPreview}
        />
        <div className='card'>
          <Filters onChange={handelFilterChange} />
          <PaginationTable
            data={allMenu}
            total={total}
            page={page}
            pages={pages}
            displayLength={limit}
            loading={loading}
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
