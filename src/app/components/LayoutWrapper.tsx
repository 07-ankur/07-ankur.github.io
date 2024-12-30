// components/LayoutWrapper.tsx
"use client";
import React from 'react';
import { NavigationProvider } from '../context/NavigationContext';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-2">
      <NavigationProvider>
        <Navbar />
        {children}
        <Footer/>
      </NavigationProvider>
    </div>
  );
};

export default LayoutWrapper;