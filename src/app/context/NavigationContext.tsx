// context/NavigationContext.tsx
"use client";
import React, { createContext, useContext, useState } from 'react';

type Tab = 'info' | 'work' | 'projects';

interface NavigationContextType {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>('info');

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}