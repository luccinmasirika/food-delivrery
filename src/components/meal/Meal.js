import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import MealModal from './MealModal';
import { isAuthenticated } from '../../api/auth';
import { onCreateData, onGetData } from '../../api';
import { API } from '../../config';
import {
  Alert,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Input,
  Loader,
} from 'rsuite';

export default function Meal() {
  const [showModal, setShowModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);
  const { user } = isAuthenticated();

  const [type, setType] = useState({
    title: '',
    nom: '',
    description: '',
    image: '',
    ets: '',
    menu: '',
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

  const [runEffect, setRunEffect] = useState(false);

  const [current, setcurrent] = useState(0);

  const { loading } = state;
  const { total, page, pages, limit } = paginate;
  const { title, image, update, ets, menu, formData } = type;

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

  const onPromo = async (id) => {
    setState({ ...state, loading: true });
    const res = await onGetData(`/promo/plat/${user._id}?_id=${id._id}`);

    if (res && res.error) {
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
      `/disableUnable/plat/${user._id}?_id=${id._id}`
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

  const onSubmitCreate = async (data) => {
    setState({ ...state, loading: true });
    const res = await onCreateData(`/create/plat/${user._id}`, data);
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

  const onSubmitUpdate = async () => {
    alert('Comming Soon !');
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/plat/${user._id}?limit=${limit}&page=${page}`
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
      const res = await onGetData(
        `/read/all/menu/${user._id}?disable=false&ets=${ets || ''}`
      );
      const res2 = await onGetData(`/read/all/ets/${user._id}?disable=false`);

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
