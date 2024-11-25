import { createContext, useState, ReactNode, FC } from "react";

interface LoaderContextInterface {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextInterface>({
  loading: false,
  setLoading: () => null,
});

export const LoaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
