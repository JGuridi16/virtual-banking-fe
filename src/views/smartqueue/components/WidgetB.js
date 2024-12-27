import React from 'react';
import { useCustomersStore } from '../../../state/customers';
import CustomCard from '../../../components/shared/Card';

const WidgetB = () => {
  const { customers } = useCustomersStore();
  return (
    <div className='app_main__smart-queue__widget-b row mx-auto container'>
      {(customers || []).map((customer, index) => (
        <div key={index} className='col-3 p-2'>
          <CustomCard
            key={index}
            title={`Cola ${index}`}
            description={customer.name}
            content={customer.id}
            timestamp={customer.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

export default WidgetB;
