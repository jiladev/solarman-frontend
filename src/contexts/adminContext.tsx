import { createContext, useState, ReactNode, FC } from "react";

interface AdminInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  token: string;
}

interface AdminContextInterface {
  admin: AdminInterface;
  setAdmin: (value: AdminInterface) => void;
}

export const AdminContext = createContext<AdminContextInterface>({
  admin: {
    id: -1,
    name: "",
    email: "",
    phone: "",
    token: "",
  },
  setAdmin: () => null,
});

export const AdminProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState({
    id: -1,
    name: "",
    email: "",
    phone: "",
    token: "",
  });

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
