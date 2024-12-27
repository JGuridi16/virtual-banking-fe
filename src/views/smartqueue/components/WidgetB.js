import React from 'react';
import { useCustomersStore } from '../../../state/customers';
import CustomCard from '../../../components/shared/CustomCard';
import { capitalize } from '../../../utils/string';

const WidgetB = () => {
  const { customers } = useCustomersStore();
  return (
    <div className='app_main__smart-queue__widget-b row mx-auto container'>
      {(customers || []).map((customer, index) => (
        <div key={index} className='col-3 p-2'>
          <CustomCard
            key={index}
            title={`Cola ${index + 1}`}
            description={capitalize(customer.name)}
            content={customer.id}
            timestamp={customer.timestamp}
          />
        </div>
      ))}
    </div>
  );
};

export default WidgetB;
