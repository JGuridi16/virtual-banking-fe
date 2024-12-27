import { HubConnectionBuilder } from '@microsoft/signalr';
import { create } from 'zustand';
import config from '../../config';
import { toast } from 'react-toastify';
import { useCustomersStore } from '../customers';

const setupConnection = () => {
  const newConnection = new HubConnectionBuilder()
    .withUrl(`${config.BASE_URL}/smartqueue`)
    .withAutomaticReconnect()
    .build();

  newConnection.onreconnecting((error) => {
    toast.info(`Reconectando... ${error}`);
  });

  newConnection.onreconnected(() => {
    toast.success('Reconectado al servidor!');
  });

  return newConnection;
};

export const useConnectionStore = create((set) => ({
  connection: null,
  invoke: async (type, payload) => {
    const { connection } = useConnectionStore.getState();
    try {
      await connection.invoke(type, payload);
      return true;
    } catch (error) {
      toast.error("Error enviando datos a la cola");
      console.error("Error enviando datos a la cola:", error, payload);
      return false;
    }
  },
  connect: () => {
    const connection = setupConnection();

    connection.on('QueueCustomer', (customer) => {
      console.log('New customer received:', customer);
      
      const existingCustomers = useCustomersStore.getState().customers;
      if (!existingCustomers.some(c => c.id === customer.id)) {
        useCustomersStore.getState().addCustomer(customer);
      }
    });

    connection
      .start()
      .then(() => {
        console.log("Conexión establecida al servidor.");
        set({ connection });
      })
      .catch((error) => {
        toast.error('Error al conectar al servidor.');
        console.error('Error al conectar al servidor: ', error);
      });
  },
  disconnect: () => {
    set((state) => {
      if (state.connection) {
        state.connection.stop()
          .then(() => console.log("Desconectado del servidor."))
          .catch((error) => console.error("Error desconectandose del servidor.", error));
      }
      return { connection: null };
    });
  },
}));
