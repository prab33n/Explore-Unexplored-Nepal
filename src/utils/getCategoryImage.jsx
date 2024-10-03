const categoryImages = {
    "Religious Temple": "https://via.placeholder.com/300x200?text=Religious+Temple",
    "Religious": "https://via.placeholder.com/300x200?text=Religious",
    "Religious cave": "https://via.placeholder.com/300x200?text=Religious+Cave",
    "Religious Site": "https://via.placeholder.com/300x200?text=Religious+Site",
  };
  
  const getCategoryImage = (category) => {
    return categoryImages[category] || "https://via.placeholder.com/300x200?text=Default"; 
  };
  
  export default getCategoryImage;
  