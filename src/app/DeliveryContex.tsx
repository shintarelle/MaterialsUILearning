'use client';

import { useState, useEffect, createContext, useMemo, useCallback } from 'react';

interface Address {
    name: string;
    place: string;
    address: string;
    phone: string;
    isDefault: boolean;
}

interface DeliveryContextType {
  address: Address;
  setAddress: (selectedAddress: Address) => void;
  clearAddress: () => void;
}

export const DeliveryContext = createContext<DeliveryContextType>({
  address: {
    name: '',
    place: '',
    address: '',
    phone: '',
    isDefault: false
  },

  setAddress: (selectedAddress: Address) => { },
  clearAddress: () => {}
});

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<Address>({
    name: '',
    place: '',
    address: '',
    phone: '',
    isDefault: false,
  });

  const clearAddress = () => {
    setAddress({
    name: '',
    place: '',
    address: '',
    phone: '',
    isDefault: false,
    });
    localStorage.removeItem('address');
  }

  // Загрузка корзины из Local Storage при загрузке компонента
  useEffect(() => {
    const savedCartItems = localStorage.getItem('address');
    if (savedCartItems) {
      setAddress(JSON.parse(savedCartItems));
    }
  }, []);

  // Сохранение корзины в Local Storage при изменении
  useEffect(() => {
    localStorage.setItem('address', JSON.stringify(address));
  }, [address]);


  console.log('Address in context:', address);

  const contextValue = useMemo(
    () => ({
      address,
      setAddress: (newAddress: Address) => {
        setAddress(newAddress);
        localStorage.setItem('address', JSON.stringify(newAddress));
      },
      clearAddress,
    }),
    [address, setAddress]
  );

  return <DeliveryContext.Provider value={contextValue}>{children}</DeliveryContext.Provider>;
};
