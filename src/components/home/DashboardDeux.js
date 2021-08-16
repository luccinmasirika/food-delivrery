import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { isMobile } from 'react-device-detect';
import { isAuthenticated } from '../../api/auth';
import { onGetData } from '../../api';
import ChartData from './data';
import { Loader } from 'rsuite';

function DashboardDeux() {
  const { user, token } = isAuthenticated();
  const [dataChart, setDataChart] = useState([]);
  const [loading, setLoading] = useState(false);

  const parseDataChart = ChartData(dataChart);

  const data2 = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Main', 'Juin'],
    datasets: [
      {
        label: 'PAYIED',
        data: [0, 19, 3, 5, 2, 3],
        backgroundColor: '#7BCB4D',
      },
      {
        label: 'CANCELED',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: '#F4516C',
      },
      {
        label: 'DENIED',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: '#F6BC51',
      },
    ],
  };

  const data = {
    labels: parseDataChart.LABELS,
    datasets: [
      {
        label: 'PAYIED',
        data: parseDataChart.PAYIED,
        backgroundColor: '#7BCB4D',
      },
      {
        label: 'CANCELED',
        data: parseDataChart.CANCELED,
        backgroundColor: '#F4516C',
      },
      {
        label: 'DENIED',
        data: parseDataChart.DENIED,
        backgroundColor: '#F6BC51',
      },
    ],
  };

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await onGetData(`/chart/un/commande/${user._id}`, token);
      setDataChart(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className='row'>
      <div className='col-md-12'>
        {loading && (
          <Loader backdrop content='loading...' style={{ zIndex: 2 }} />
        )}
        <Bar
          data={data}
          height={isMobile ? 0 : 70}
          style={{ marginBottom: '30px' }}
        />
      </div>
    </div>
  );
}

export default DashboardDeux;
