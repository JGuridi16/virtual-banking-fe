import React, { useState } from 'react';
import { useConnectionStore } from '../../../state/smartQueue';
import { toast } from 'react-toastify';
import { useCustomersStore } from '../../../state/customers';
import { ACTION_TYPES } from '../../../state/smartQueue/types';
import { Button, Form } from 'react-bootstrap';

const initialValues = {
  id: '',
  name: '',
  timestamp: null,
};

const WidgetA = () => {
  const { customers, reset } = useCustomersStore();
  const { connection, invoke } = useConnectionStore();
  const [customer, setCustomer] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = async () => {
    reset();
  };
  
  const handleSubmit = async () => {
    if (!customer.name || !customer.id) {
      toast.error('Favor completar los campos requeridos.');
      return;
    }

    if (!connection) {
      toast.error('Se perdió la conexión con el servidor.');
      return;
    }

    if (!customers.some(c => c.id === customer.id)) {
      await invoke(ACTION_TYPES.addCustomer, {
        ...customer,
        timestamp: new Date().toISOString(),
      });
    } else {
      toast.error('Este cliente ya está en la cola.');
    }
  };

  return (
    <div className='app_main__smart-queue__widget-a mt-5'>
      <Form className='p-3'>
        <Form.Label className='h1 mt-4 mb-5'>Registro de Cola</Form.Label>
        <Form.Group className="mb-4" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name='name' type="text" placeholder="Introduzca nombre de cliente" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="id">
          <Form.Label>Cédula</Form.Label>
          <Form.Control name='id' type="text" placeholder="Introduzca cédula de cliente" onChange={handleChange} />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleSubmit}
          type="button"
          className='col-12 mt-3'
        >
          Enviar
        </Button>
        <Button
          variant="secondary"
          onClick={handleReset}
          type="button"
          className='col-12 mt-3'
        >
          Reiniciar cola
        </Button>
      </Form>
    </div>
  );
};

export default WidgetA;
