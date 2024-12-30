"use client";
import React from 'react';
import { NavigationProvider } from '../context/NavigationContext';
import Navbar from './Navbar';

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <NavigationProvider>
      <Navbar />
      {children}
    </NavigationProvider>
  );
};

export default ClientProvider;