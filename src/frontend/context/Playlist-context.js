import { useContext, createContext, useState } from "react";

const PlaylistContext = createContext();

const usePlaylistContext = () => useContext(PlaylistContext);

function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);

  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export { PlaylistProvider, usePlaylistContext };
