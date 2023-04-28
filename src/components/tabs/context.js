import { useContext, createContext } from 'react';

export const TabContext = createContext(null);

export const useTabContext = () => useContext(TabContext);
