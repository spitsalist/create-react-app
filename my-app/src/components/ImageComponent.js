function ImageComponent() {

  const imageUrl = "https://www.freewebheaders.com/wp-content/gallery/computer/cache/blue-computer-business-background-header.jpg-nggid042958-ngg0dyn-1280x375x100-00f0w010c010r110f110r010t010.jpg"; 

  const style = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
   
   
 
  };

  return (
    <img src={imageUrl} style={style} alt="Aabstract" />
  )
}

export default ImageComponent;
