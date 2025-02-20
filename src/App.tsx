import { useState, useEffect } from "react";
import ScrollingStrips from "./components/sections/ScrollingStrips";
import Loading from "./components/sections/Loading";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SlideShow from "./components/sections/SlideShow";
import { Sticky } from "./components/sections/Sticky";
import InverseCursor from "./components/InverseCursor";
import { Cursor } from "./components/Cursor";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work_Page from "./components/sections/Work_Page";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showStrips, setShowStrips] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowStrips(true); // Show ScrollingStrips after loading
  };

  useEffect(() => {
    if (showStrips) {
      // Hide ScrollingStrips after 500ms and show main content
      const timer = setTimeout(() => setShowStrips(false), 900);
      return () => clearTimeout(timer);
    }
  }, [showStrips]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<InverseCursor>
      {isLoading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : showStrips ? (
        <ScrollingStrips />
      ) : (
        <div className="bg-[#0B0B0B]">
          <Cursor>
          <Header />
          <Hero />
          </Cursor>
          <main>
           <SlideShow />
           <Sticky />
          </main>
          <div className="h-[100vh]">EHEHEHEH</div>
        </div>
      )}
    </InverseCursor>} ></Route>
    <Route path='/work' element={<Work_Page/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
