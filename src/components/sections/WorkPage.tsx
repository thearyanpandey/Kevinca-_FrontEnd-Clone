import { Container } from "../Container";
import FadeIn from "../FadeIn";

const WorkPage = () => {
  return (
   <Container>
     <div className="w-full min-h-screen">
      <div className="w-full px-4">
        <FadeIn>
        <h1 className="text-[12vw] font-bold text-[#FDF2E6] leading-none tracking-tighter">
        Check the Work.
        </h1>
        </FadeIn>
      </div>
      <div className="flex flex-col items-end px-4 mt-20">
        <div className="max-w-md ml-auto">
          <p className="text-[#E9DFD3] text-lg tracking-tight font-bold mb-8">
            From photography, video, web design, I've been practicing the skills of media for over 10 years. My approach blends creativity with technical know-how, whether I'm behind the lens, editing footage, or coding responsive web layouts.
          </p>
        </div>
        <button className="text-[#E9DFD3] text-xl font-bold hover:opacity-80 transition-opacity">
          View Work
        </button>
      </div>
    </div>
   </Container>
  );
};

export default WorkPage;
