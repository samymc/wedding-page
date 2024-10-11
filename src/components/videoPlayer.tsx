export const VideoPlayer:React.FC = () => {
  return (
    <div className="flex justify-center videoPlayer">
      <video controls onContextMenu={(e) => e.preventDefault()}>
        <source src="/video.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  );
};

export default VideoPlayer;