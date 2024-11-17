import { createContext, useState, ReactNode, FC } from "react";

interface VariableInterface {
  id: number;
  name: string;
  value: number;
}

interface VariableContextInterface {
  variables: VariableInterface[];
  setVariables: (value: VariableInterface[]) => void;
}

export const VariableContext = createContext<VariableContextInterface>({
  variables: [],
  setVariables: () => null,
});

export const VariableProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [variables, setVariables] = useState<VariableInterface[]>([]);

  return (
    <VariableContext.Provider value={{ variables, setVariables }}>
      {children}
    </VariableContext.Provider>
  );
};
