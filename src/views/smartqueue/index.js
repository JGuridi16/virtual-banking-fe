import React, { useEffect } from 'react';
import { useConnectionStore } from '../../state/smartQueue';
import WidgetB from './components/WidgetB';
import WidgetA from './components/WidgetA';

const SmartQueue = () => {
  const { connect, disconnect } = useConnectionStore();

  useEffect(() => {
    connect();

    return () => disconnect();
  }, [connect, disconnect]);

  return (
    <div className='app_main__smart-queue vh-100 bg-white row mx-auto'>
      <div className='col-4 bg-light shadow'>
        <WidgetA />
      </div>
      <div className='col-8' style={{ height: '100%', overflowY: 'auto' }}>
        <WidgetB />
      </div>
    </div>
  );
};

export default SmartQueue;
