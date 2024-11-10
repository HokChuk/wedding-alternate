import React from 'react';
import HomePage from "./components/Homepage";
import Layout from './components/Layout';
import { useRef, useSyncExternalStore } from "react";

function useMediaQuery(query) {
  const mediaQuery = useRef(window.matchMedia(query));

  return useSyncExternalStore(
    (callback) => {
      mediaQuery.current.addEventListener("change", callback);
      return () => {
        mediaQuery.current.removeEventListener("change", callback);
      };
    },
    () => mediaQuery.current.matches,
  );
}

const App = () => {

  useMediaQuery("(max-width: 768px)");

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}


export default App;
