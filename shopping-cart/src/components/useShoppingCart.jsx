import { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartProvider';

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
