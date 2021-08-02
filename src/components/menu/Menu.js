import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MenuModal from './MenuModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData, onUpdateData } from '../../api';
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
    _id: '',
    formData: new FormData(),
    update: false,
  });
  const [allType, setAllType] = useState([]);
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
  const { title, image, update, formData, category, ets, _id } = type;

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
    setState({ ...state, loading: false, error: '' });
    const { nom, description, _id, category, ets } = data;
    setType({
      ...type,
      title: `Update ${nom}'s informations`,
      nom,
      description,
      category,
      ets,
      _id,
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

  const onSubmitUpdate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(`/update/menu/${user._id}?_id=${_id}`, data);
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

  const onDisableUnable = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(
      `/disableUnable/menu/${user._id}?_id=${id._id}`
    );

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

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/menu/${user._id}?limit=${limit}&page=${page}`
      );

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
      const res = await onGetData(`/read/all/ets/${user._id}?disable=false`);

      setAllEts(res.data);

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
          etsData={
            allEts &&
            allEts.map((x) => {
              return { label: x.nom, value: x._id };
            })
          }
          btnStatus={image ? true : false}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSelectChange={handleSelectChange}
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
