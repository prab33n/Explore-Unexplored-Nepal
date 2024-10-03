const categoryImages = {
    "Religious Temple": "https://dummyimage.com/300x200?text=Religious+Temple",
    "Religious": "https://dummyimage.com/300x200?text=Religious",
    "Religious cave": "https://dummyimage.com/300x200?text=Religious+Cave",
    "Religious Site": "https://dummyimage.com/300x200?text=Religious+Site",
  };
  
  const getCategoryImage = (category) => {
    return categoryImages[category] || "https://dummyimage.com/300x200?text=Default"; 
  };
  
  export default getCategoryImage;
  
