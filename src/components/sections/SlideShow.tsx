import { useState, useEffect } from 'react';
import { Images } from '../Images'; // Update import path

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-black">
      <img
        key={currentIndex}
        src={Images[currentIndex].poster}
        className="w-full h-full object-cover animate-fade"
        alt="Slideshow"
      />
    </div>
  );
};

export default Slideshow;