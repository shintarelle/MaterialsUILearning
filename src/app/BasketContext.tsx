'use client';

import { useState, useEffect, createContext, useMemo, useCallback } from 'react';

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}

interface BasketContextType {
  cartItems: CartItem[];
  addToCart: (selectedProduct: CartItem) => void;
  updateItem: (selectedProduct: CartItem, newQuantity: number) => void;
  deleteItemById: (item: string) => void;
  clearAll: () => void;
}

export const BasketContext = createContext<BasketContextType>({
  cartItems: [],
  addToCart: (selectedProduct: CartItem) => {},
  updateItem: (selectedProduct: CartItem, newQuantity: number) => {},
  deleteItemById: (itemId: string) => {},
  clearAll: () => {},
});

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Загрузка корзины из Local Storage при загрузке компонента
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems((prevCartItems) => [...prevCartItems, ...JSON.parse(savedCartItems)]);
    }
  }, []);

  // Сохранение корзины в Local Storage при изменении
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback(
    (selectedProduct: CartItem) => {
      const existingItemIndex: number = cartItems.findIndex(
        (item) =>
          item.id === selectedProduct.id &&
          item.color === selectedProduct.color &&
          item.size === selectedProduct.size
      );

      const updatedCartItems = [...cartItems];

      if (
        existingItemIndex !== -1 &&
        updatedCartItems[existingItemIndex]?.quantity &&
        selectedProduct?.quantity
      ) {
        const existingQuantity = updatedCartItems[existingItemIndex]?.quantity || 0;
        const newQuantity = existingQuantity + (selectedProduct?.quantity || 0);
        updatedCartItems[existingItemIndex].quantity = newQuantity;

        setCartItems(updatedCartItems);
      } else {
        setCartItems((prevCartItems) => [...prevCartItems, selectedProduct]);
      }
    }, [cartItems]);
// !!!!    --------------  @!!!!! TO DO
  const updateItem = useCallback((selectedProduct: CartItem, newQuantity: number) => {
    setCartItems((prevCartItems) => {
      const index = prevCartItems.findIndex((item) => item.id === selectedProduct.id && item.color === selectedProduct.color&& item.size === selectedProduct.size);
      if (index !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[index] = { ...updatedCartItems[index], quantity: newQuantity };
        return updatedCartItems;
      }
      return prevCartItems;
    });
  }, []);


  const deleteItemById = useCallback(
    (itemId: string) => {
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
      console.log('продукт удален из контекста', itemId);
    },
    []
  );

  const clearAll = useCallback(() => {
    setCartItems([]);
  }, []);
  console.log("Basket items:", cartItems);

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateItem,
      deleteItemById,
      clearAll,
    }),
    [cartItems, addToCart, updateItem, deleteItemById, clearAll]
  );


  return <BasketContext.Provider value={contextValue}>{children}</BasketContext.Provider>;
};
