import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      // Update the state with the user's current path when they go back and forth in the browser.  The state will
      // also cause the re-render of new content.
      setCurrentPath(window.location.pathname);
    };
    // `popstate` is the forward or back buttons. Any other pushstate event (used to route the user without
    // re-loading the entire page from the server) won't trigger this.
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
