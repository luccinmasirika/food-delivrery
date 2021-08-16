import React, { useState, useEffect } from 'react';

import Footer from '../footer/Footer';
import Layout from '../Layout';
import Header from '../navBar/Header';
import DataUn from './DataUn';
import { isAuthenticated } from '../../api/auth';
import { onGetData } from '../../api';
import DashboardDeux from './DashboardDeux';

const Home = () => {
  const { user, token } = isAuthenticated();
  const [dataStat, setDataStat] = useState({
    user: 0,
    ets: 0,
    commande: 0,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await onGetData(`/stats/un/${user._id}`, token);
      setDataStat({
        ...dataStat,
        user: data.user,
        ets: data.ets,
        commande: data.commande,
      });
      setLoading(false);
    })();
  }, []);
  return (
    <Layout>
      <Header
        parent='Home'
        content='Dashboard'
        title='Dashboard'
        create={false}
      />
      <section className='main-content'>
        <div className='row'>
          <DataUn
            title='Client'
            loading={loading}
            number={dataStat.user}
            color='success'
          />
          <DataUn
            title='Establishment'
            loading={loading}
            number={dataStat.ets}
            color='warning'
          />
          <DataUn
            title='Order'
            loading={loading}
            number={dataStat.commande}
            color='indigo'
          />
        </div>
        <div className='card pt-4 pl-4 pr-4'>
          <DashboardDeux />
        </div>
        <Footer />
      </section>
    </Layout>
  );
};

export default Home;
