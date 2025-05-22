import React, { createContext, useContext, useState } from "react";

interface NameContextType {
  name: string;
  setName: (s: string) => void;
}

const NameContext = createContext<NameContextType | undefined>(undefined);

export const useNameContext = () => {
  const ctx = useContext(NameContext);
  if (!ctx) throw new Error("NameContext not found!");
  return ctx;
};

export const NameProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};