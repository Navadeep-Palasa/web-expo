const ImageNewTab = () => {
    const imageUrl = "/web-expo.png"; // Path to the image in the public folder
  
    const handleClick = () => {
      window.open(imageUrl, '_blank'); // Open the image in a new tab
    };
}
    
  export default ImageNewTab;