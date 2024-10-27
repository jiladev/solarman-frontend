import { createContext, useState, ReactNode, FC } from "react";

interface AdminInterface {
  admin: string;
  setAdmin: (value: string) => void;
}

const AdminContext = createContext<AdminInterface | undefined>(undefined);

const AdminProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState("Teste");

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
