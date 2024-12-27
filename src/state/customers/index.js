import { create } from 'zustand';

export const useCustomersStore = create((set) => ({
  customers: [],
  addCustomer: (customer) => set((state) => {
    const exists = state.customers.some(existingCustomer => existingCustomer.id === customer.id);
    if (exists) {
      return state;
    }
    
    return {
      customers: [...state.customers, customer],
    };
  }),
  reset: () => set({ customers: [] }),
}));
