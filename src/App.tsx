import { Cursor } from "./components/Cursor";
import InverseCursor from "./components/InverseCursor";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SlideShow from "./components/sections/SlideShow";
import {Sticky} from "./components/sections/Sticky";
import {Test} from "./components/sections/Test";
import Work_Page from "./components/sections/Work_Page";
import WorkPage from "./components/sections/WorkPage";

const App = () => {
  return (
        <div className="bg-[#0B0B0B]">
          <Header />
          <main>
            <Hero />
            <SlideShow />
            <Sticky />
            <WorkPage/>
          </main>
          <div className="h-[300vh]">EHEHEHEH</div>
        </div>
  );
};

export default App;
