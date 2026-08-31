const sampleListings = [
  // 1. Trending
  {
    title: "Modern Luxury Villa with Private Pool",
    description: "Enjoy a trending luxury getaway in the heart of South Delhi with world-class amenities and lush gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Delhi",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
  },
  {
    title: "Sleek Sea-Facing Penthouse",
    description: "Experience top-tier city living in Bandra with breathtaking views of the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Mumbai",
    country: "India",
    category: "Trending",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },

  // 2. Rooms
  {
    title: "Cozy Heritage Room in Old Town",
    description: "A comfortable private room in a traditional Haveli near the City Palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Jaipur",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Chic Boutique Studio Room",
    description: "Minimalist studio room walking distance from Anjuna Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Goa",
    country: "India",
    category: "Rooms",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },

  // 3. Iconic Cities
  {
    title: "Iconic French Quarter Apartment",
    description: "Charming sunlit apartment right in the heart of White Town Pondicherry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Pondicherry",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [79.8083, 11.9416] }
  },
  {
    title: "Penthouse Overlooking Marine Drive",
    description: "Stay in an iconic city location with sweeping panoramic views of the Queen's Necklace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },

  // 4. Mountains
  {
    title: "Pine Forest Mountain Cottage",
    description: "Nestled in the serene hills of Mall Road with stunning Himalayan mountain vistas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Shimla",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Snowy Alpine Lodge",
    description: "Rustic wooden lodge offering panoramic views of snow-capped mountain peaks in Solang Valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6800,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1887, 32.2432] }
  },

  // 5. Castles
  {
    title: "Royal Heritage Fort Castle",
    description: "Live like royalty in a restored 18th-century Rajput fort castle overlooking Lake Pichola.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Udaipur",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [73.6828, 24.5854] }
  },
  {
    title: "Golden Sandstone Desert Citadel",
    description: "Historic castle stay inside the living fort of Jaisalmer.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 14000,
    location: "Jaisalmer",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [70.9126, 26.9157] }
  },

  // 6. Arctic
  {
    title: "High-Altitude Glacial Pod",
    description: "Experience the cool Arctic-like mountain wilderness in the high valley of Leh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 9500,
    location: "Leh",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
  },
  {
    title: "Snowland Igloo Cabin",
    description: "Cozy insulated Arctic cabin surrounded by deep winter snowdrifts in Gulmarg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 11000,
    location: "Srinagar",
    country: "India",
    category: "Arctic",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  },

  // 7. Camping
  {
    title: "Riverside Luxury Eco Tents",
    description: "Glamping right on the banks of the Ganges with beach campfire activities and rafting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Rishikesh",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Thar Desert Luxury Camp",
    description: "Sleep under the starry night sky surrounded by rolling sand dunes in Sam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [70.9126, 26.9157] }
  },

  // 8. Farms
  {
    title: "Organic Tea Estate Bungalow",
    description: "Tranquil farm stay amidst acres of lush green tea plantations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Munnar",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Traditional Punjab Farmstay",
    description: "Authentic countryside farm experience with organic farming and fresh home-cooked meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Amritsar",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [74.8723, 31.6340] }
  },

  // 9. Domes
  {
    title: "Stargazing Geodesic Dome",
    description: "Futuristic clear glass dome offering 360-degree views of the starry night sky.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Manali",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [77.1887, 32.2432] }
  },
  {
    title: "Eco Dome in Nilgiri Hills",
    description: "Sustainable dome stay surrounded by misty eucalyptus mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "Ooty",
    country: "India",
    category: "Domes",
    geometry: { type: "Point", coordinates: [76.6932, 11.4102] }
  },

  // 10. Boats
  {
    title: "Luxury Kerala Houseboat",
    description: "Cruise through serene backwaters on a traditional wooden Kettuvallam boat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Kochi",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [76.2673, 9.9312] }
  },
  {
    title: "Dal Lake Heritage Houseboat",
    description: "Hand-carved cedar boat moored on the tranquil waters of Dal Lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Srinagar",
    country: "India",
    category: "Boats",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  }
];

module.exports = { data: sampleListings };
