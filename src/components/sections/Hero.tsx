import { Container } from "../Container";

const Hero = () => {
  return (
      <Container>
        {/* Content container - positioned relatively on top of canvas */}
        <div className="relative z-10 text-[#FDF2E6] flex flex-col justify-center">
          {/* Main Headline */}
          <div className="mb-10">
            <h1 className="text-9xl font-[font1] font-extrabold">
              I'm a Creative that has a burning passion to make brands stand
              out.
            </h1>
          </div>

          {/* Secondary Information */}
          <div className="flex justify-between">
            <div className="font-[font1] text-lg">
              <h1>Photography</h1>
              <h1>Videography</h1>
              <h1>Animation</h1>
              <h1>UI/UX Design</h1>
              <h1>Web Design</h1>
              <h1>Branding & Direction</h1>
            </div>
            <div className="font-[font1] text-lg flex">
              <h1 className="mr-12">
                Ontario, <br /> Canada
              </h1>
              <h1 className="ml-12 bg-">
                Available for <br /> Freelance
              </h1>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default Hero;
