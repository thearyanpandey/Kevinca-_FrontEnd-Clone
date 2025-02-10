import { useEffect, useRef, useState } from "react";
import { ProjectImg_Video as videos } from "../Images";
import ReactPlayer from "react-player";

const Work_Page = () => {
  const galleryRef = useRef(null);
  const [items, setItems] = useState([]); // Changed to 2D array

  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 4 },
      ];

      // Create a 2D array structure
      const newItems = rows.map((row) => {
        return Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = videos.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video, 
          };
        });
      });
      setItems(newItems);
    };
    generateItems();

    const handleMouseMove = (e) => {
      const {clientX, clientY, currentTarget} = e;
      const { width, height } = currentTarget.getBoundingClientRect();

      const centerX = width/2;
      const centerY = height/2;

      const sensitivity = 1;
      const deltaX = (centerX - clientX) / sensitivity;
      const deltaY = (centerY - clientY) / sensitivity;

      galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
      
    }

    const container = document.querySelector(".container");
      container?.addEventListener("mousemove", handleMouseMove);

      return () =>{
        container?.addEventListener("mousemove", handleMouseMove);
      }


  }, []);

  return (
    <div className="container">
      <div ref={galleryRef} className="gallery">
        {items.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="row">
            {row.map((item) => (
              <div key={item.id} className="item">
                <div className="preview-img">
                  <img 
                    src={item.video?.poster} // Added optional chaining
                    alt={item.video?.videoName} 
                  />
                </div>
                <p id="videoName">{item.video?.videoName}</p>
                <div className="video-wrapper">
                  {item.video && (
                    <ReactPlayer
                      url={`${item.video.VideoURL}`}
                      controls={true}
                      autoPlay={true}
                      loop={true}
                      playing
                      muted
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work_Page;