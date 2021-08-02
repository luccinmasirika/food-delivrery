import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import TypeModal from './TypeModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
import { Alert, Notification } from 'rsuite';
import PlaceholderParagraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';

export default function Type() {
  const [showModal, setShowModal] = useState(false);
  const { user } = isAuthenticated();

  const [type, setType] = useState({
    title: '',
    nom: '',
    _id: '',
    description: '',
    image: '',
    formData: new FormData(),
    update: false,
  });
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

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, formData, _id } = type;

  function openModal(title) {
    setType({ ...type, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setType({ ...type, title: '', nom: '', description: '', image: '' });
  }

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
    const { nom, description, _id, image } = data;
    setType({
      ...type,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      _id,
      image,
      update: true,
    });
    setShowModal(true);
  };

  const onSubmitCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/type/${user._id}`, data);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }

    // Notification.open({
    //   title: 'Success',
    //   placement: 'bottomEnd',
    //   description: <PlaceholderParagraph style={{ width: 320 }} rows={3} />,
    // });

    // Alert.success(res.message, 3000);
    setState({ ...state, loading: false, success: res.message });
    setShowModal(false);

    setType({
      ...allType,
      title: '',
      nom: '',
      description: '',
      image: '',
      formData: new FormData(),
    });

    setRunEffect(!runEffect);
  };

  const onSubmitUpdate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(`/update/type/${user._id}?_id=${_id}`, data);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }

    Notification['success']({
      title: 'Success',
      placement: 'bottomEnd',
      description:
        'Le lorem ipsum est, en imprimerie, une suite de mots sans une suite de mots sans ',
    });

    setState({ ...state, loading: false, success: res.message });
    setShowModal(false);

    setType({
      ...allType,
      title: '',
      nom: '',
      description: '',
      image: '',
      formData: new FormData(),
    });

    setRunEffect(!runEffect);
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/type/${user._id}?limit=${limit}&page=${page}`
      );
      setAllType(res.data);
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
        parent='Home'
        content='Type'
        title='Type management'
        text='Create new type'
        handelClick={() => openModal('Create establishment type')}
        create={true}
      />

      <section className='main-content'>
        <TypeModal
          title={title}
          data={type}
          showModal={showModal}
          state={state}
          closeModal={closeModal}
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />
        <div className='card'>
          <PaginationTable
            data={allType}
            total={total}
            page={page}
            pages={pages}
            displayLength={limit}
            loading={loading}
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
