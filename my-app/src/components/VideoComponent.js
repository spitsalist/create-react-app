function VideoComponent() {

    const videoId = "xxrI8QgbneQ";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  

    const style = {
      width: '620px',
      height: '400px',
      marginTop: '20px',
      
    };
  
    return (
        <iframe
        src={embedUrl}
        style={style}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      ></iframe>
    )

  }
  
  export default VideoComponent;
  