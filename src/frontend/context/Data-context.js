import { useContext, createContext, useState } from "react";

const DataContext = createContext();

const useDataContext = () => useContext(DataContext);

function DataProvider({ children }) {
  const [videos, setVideos] = useState([]);
  return (
    <DataContext.Provider value={{ videos, setVideos }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, useDataContext };
