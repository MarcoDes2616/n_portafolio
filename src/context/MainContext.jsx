import React, { createContext, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCustomScroll = (scroll) => {
    window.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  };

  const functions = {
    handleScrollToTop,
    handleCustomScroll,
  };

  return (
    <MainContext.Provider value={functions}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
