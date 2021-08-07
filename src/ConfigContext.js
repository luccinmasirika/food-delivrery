import React, { useState, useEffect } from 'react';
import { onGetData } from './api';

export const GetConfigContext = React.createContext('');
export const RunEffectContext = React.createContext('');

export default function ConfigContext({ children }) {
  const [config, setConfig] = useState('');

  const getData = async () => {
    const res = await onGetData(`/read/config`);

    if (!res.error) {
      setConfig(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GetConfigContext.Provider value={config}>
      <RunEffectContext.Provider value={getData}>
        {children}
      </RunEffectContext.Provider>
    </GetConfigContext.Provider>
  );
}
