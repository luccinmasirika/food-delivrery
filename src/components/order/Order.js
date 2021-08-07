import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import { useState, useEffect } from 'react';
import PaginationTable from './DataTable';
import { isAuthenticated } from '../../api/auth';
import { onGetData, onUpdateData } from '../../api';
import { Alert } from 'rsuite';
import Filters from './Filters';

export default function Order() {
  const { user, token } = isAuthenticated();

  const [filters, setFilters] = useState({
    status: '',
    ets: '',
    livreur: '',
    name: '',
  });
  const [allEts, setAllEts] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
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

  const handelFilterChange = (props) => (value) => {
    setFilters({
      ...filters,
      [props]: value,
    });
  };

  const handleChangePage = (data) => {
    setPaginate({ ...paginate, page: data });
  };

  const handleChangeLength = (data) => {
    setState({ ...state, loading: true });
    setPaginate({ ...paginate, limit: data, page: 1 });
  };

  const onSubmitCloseOrder = async (data) => {
    setState({ ...state, loading: true });
    const res = await onUpdateData(
      `/close/commande/${data._id}/${user._id}`,
      token
    );
    if (res && res.error) {
      return setState({ ...state, error: res.error, loading: false });
    }
    Alert.success(res.message, 3000);
    setState({ ...state, loading: false, success: res.message });
    setRunEffect(true);
  };

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/ets/${user._id}?limit=${limit}&page=${page}`,
        token
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllEts(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/livreur/${user._id}?limit=${limit}&page=${page}`,
        token
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllUser(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });
      const res = await onGetData(
        `/read/all/commande/${user._id}?limit=${limit}&page=${page}&etat=${
          filters.status || ''
        }&ets=${filters.ets || ''}&livreur=${filters.livreur || ''}`,
        token
      );
      if (res && res.error) {
        return setState({ ...state, loading: false, error: res.error });
      }
      setAllOrder(res && res.data);
      setPaginate({
        ...paginate,
        total: res.total,
        page: res.page,
      });
      setState({ ...state, loading: false });
    })();
  }, [limit, runEffect, page, filters.ets, filters.livreur, filters.status]);

  return (
    <Layout>
      <Header
        parent='Home'
        content='Order'
        title='Order management'
        create={false}
      />

      <section className='main-content'>
        <div className='card'>
          <Filters
            onChange={handelFilterChange}
            data={allEts}
            data2={allUser.map((x) => {
              return { label: `${x.firstName} ${x.lastName}`, value: x._id };
            })}
          />
          <PaginationTable
            data={allOrder}
            total={total}
            page={page}
            pages={pages}
            displayLength={limit}
            loading={loading}
            handleChangePage={handleChangePage}
            handleChangeLength={handleChangeLength}
            handleAction={onSubmitCloseOrder}
          />
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
