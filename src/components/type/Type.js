import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PaginationTable from '../../sections/DataTable';
import TypeModal from './TypeModal';
import { isAuthenticated } from '../../api/auth';
import { onCreate, onGetData } from '../../api/type';

export default function Type() {
  const [showModal, setShowModal] = useState(false);
  const { user } = isAuthenticated();

  const [type, setType] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    formData: new FormData(),
  });
  const [allType, setAllType] = useState([]);
  const [paginate, setPaginate] = useState({
    total: 0,
    page: 0,
    pages: 0,
    limit: 0,
  });
  const [state, setState] = useState({
    error: '',
    success: '',
    loading: false,
  });

  const { loading, success, message } = state;
  const { total, page, pages, limit } = paginate;
  const { title, nom, description, image } = type;

  function openModal(title) {
    setType({ ...type, title });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setType({ ...type, title: '', nom: '', description: '', image: '' });
  }

  const handleChange = (value, name) => {
    const { nom, description } = value;
    setType({ ...type, nom, description });
    type.formData.set(name.target.name, name.target.value);
  };

  const handleImageChange = (value) => {
    setType({
      ...type,
      image: value[0] && value[0].blobFile,
    });
    type.formData.append('image', value[0] && value[0].blobFile);
  };

  const handleChangePage = () => {
    //TODO : Pagination page change
  };

  const handleChangeLength = (data) => {
    setState({ ...state, loading: true });
    setPaginate({ ...paginate, limit: data });
  };

  const handleEdit = (data) => {
    const { nom, description } = data;
    setType({
      ...type,
      title: `Update ${nom}'s informations`,
      nom,
      description,
    });
    setShowModal(true);
  };

  const onSubmit = async () => {
    const res = await axios.post(
      'http://localhost:8000/api/test',
      type.formData
    );
    console.log(res.data);
  };

  useEffect(() => {
    (async () => {
      const res = await onGetData(`/read/all/type/${user._id}?limit=${limit}&page=${page}`);
      console.log('test data ongetdata', res.error);
      if (res && res.error) {
        setState({ ...state, loading: false, error: res.error });
      }
      setAllType(res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit]);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Type'
        title='Type management'
        handelClick={() => openModal('Create Type of establishment')}
        create={true}
      />

      <section className='main-content'>
        <TypeModal
          title={title}
          data={type}
          showModal={showModal}
          closeModal={closeModal}
          btnStatus={image}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          onSubmit={onSubmit}
        />
        <div className='card'>
          <PaginationTable
            data={allType}
            total={total}
            page={page}
            pages={pages}
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
