import { useState, useRef } from 'react';
import "../index.css"

function Prototype() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="prototype_container">

      <div 
        className="video_wrapper"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="video"
          src="/videos/prototype.mp4"
        />
        
        <div className={`video_overlay ${!isPlaying ? 'show' : ''} ${isPlaying && showControls ? 'show' : ''}`} />
        
        <div className={`play_button-wrapper ${!isPlaying ? 'show' : ''} ${isPlaying && showControls ? 'show' : ''}`}>
          <div className="play_button">
            {isPlaying ? (
              <span className="icon icon_pause"></span>
            ) : (
              <span className="icon icon_play"></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prototype