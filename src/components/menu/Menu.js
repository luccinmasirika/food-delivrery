import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MenuModal from './MenuModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData } from '../../api';
import CategoryModal from './CategoryModal';
import {
  Alert,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Input,
  Loader,
} from 'rsuite';

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);
  const { user } = isAuthenticated();

  const [type, setType] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    ets: '',
    category: '',
    formData: new FormData(),
    update: false,
  });
  const [allType, setAllType] = useState([]);
  const [allCat, setAllCat] = useState([]);
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
  const [runEffect, setRunEffect] = useState(false);

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, formData } = type;

  function openModal(title) {
    setType({ ...type, title });
    setShowModal(true);
  }

  function closeModal() {
    setState({ ...state, loading: false, error: '' });
    setShowModal(false);
    setType({ ...type, title: '', nom: '', description: '', image: '' });
  }

  function openCatModal(title) {
    setType({ ...type, title });
    setShowCatModal(true);
  }

  function closeCatModal() {
    setState({ ...state, loading: false, error: '' });
    setShowCatModal(false);
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
    type.formData.append('image', value[0] && value[0].blobFile);
  };

  const handleChangePage = (data) => {
    setPaginate({ ...paginate, page: data });
  };

  const handleChangeLength = (data) => {
    setState({ ...state, loading: true });
    setPaginate({ ...paginate, limit: data, page: 1 });
  };

  const handleEdit = (data) => {
    const { nom, description } = data;
    setType({
      ...type,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      update: true,
    });
    setShowModal(true);
  };

  const handleSelectChange = (props) => (value) => {
    setState({ ...state, loading: false, error: '' });
    setType({ ...type, [props]: value });
    formData.set(props, value);
  };

  const onSubmitCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/menu/${user._id}`, data);
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }
    Alert.success(res.message, 3000);
    setState({ ...state, loading: false, success: res.message });
    setType({
      ...type,
      nom: '',
      titre: '',
      description: '',
      category: '',
      ets: '',
      image: '',
      formData: new FormData(),
    });
    setShowModal(false);
    setRunEffect(!runEffect);
  };

  const onSubmitUpdate = async () => {
    alert('Comming Soon !');
  };

  const onSubmitCatCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/category/${user._id}`, {
      nom: data.nom,
    });
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }
    Alert.success(res.message, 3000);
    setState({ ...state, loading: false, success: res.message });
    setShowCatModal(false);
    setRunEffect(!runEffect);
  };

  const onSubmitCatUpdate = async () => {
    alert('Comming Soon !');
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/menu/${user._id}?limit=${limit}&page=${page}`
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
  }, [limit, runEffect, page]);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(`/read/all/category/${user._id}`);
      const res2 = await onGetData(`/read/all/ets/${user._id}?disable=false`);

      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }

      setAllCat(res.data);
      setAllEts(res2.data);

      setState({ ...state, loading: false });
    })();
  }, [runEffect]);

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

      {console.log('test', allEts)}

      <section className='main-content'>
        <MenuModal
          title={title}
          data={type}
          showModal={showModal}
          state={state}
          closeModal={closeModal}
          etsData={allEts.map((x) => {
            return { label: x.nom, value: x._id };
          })}
          catData={allCat.map((x) => {
            return { label: x.nom, value: x._id };
          })}
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSelectChange={handleSelectChange}
          onSubmit={() =>
            update ? onSubmitUpdate(formData) : onSubmitCreate(formData)
          }
        />

        <CategoryModal
          title={title}
          data={type}
          showModal={showCatModal}
          state={state}
          closeModal={closeCatModal}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          onSubmit={() =>
            update ? onSubmitCatUpdate(type) : onSubmitCatCreate(type)
          }
        />
        <div className='row'>
          <div className='col-md-9'>
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
          </div>
          <div className='col-md-3'>
            <div className='card' style={{ height: 484 }}>
              <div className='card-header card-gray'>Categories</div>
              <div className='card-body category-body h-100 overflow-auto'>
                <ul className='list-group list-group-flush'>
                  {loading && (
                    <Loader
                      backdrop
                      content='loading...'
                      style={{ zIndex: 2 }}
                    />
                  )}
                  {allCat &&
                    allCat.map((_) => (
                      <li
                        key={_._id}
                        className='list-group-item d-flex justify-content-between align-items-center'
                      >
                        {_.nom}
                        <span
                          title='Menu'
                          style={{ cursor: 'help' }}
                          className='badge badge-primary badge-pill'
                        >
                          {_.menu.length}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <div className='card-footer '>
                <button
                  title='Create new category'
                  onClick={() => openCatModal('Create new category')}
                  class='btn btn-success btn-border btn-rounded btn-sm float-right'
                >
                  <i class='fa fa-plus'></i> New
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
