import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Main from "./main";
import MobileHome from "./mobile-home";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const isTouchDevice =
      "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
    setIsMobile(isTouchDevice);
  }, []);
  return isMobile ? (
    <MobileHome />
  ) : (
    <DndProvider backend={HTML5Backend}>
      <Main />
    </DndProvider>
  );
};

export default Home;
