import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallary] = useState([]);
  useEffect(() => {
    fetch("https://toy-marketplace-server-henna.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallary(data[0].gallery));
  }, []);

  
  return (
    <div className="my-32 px-4 md:px-0">
        <h1 className="text-2xl md:text-5xl uppercase font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">Try The Realstic Toys</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((col) => (
          <div key={gallery.indexOf(col)} className="grid gap-4">
            {col.map((img) => (
              <div key={col.indexOf(img)}>
                <img
                  className="h-auto max-w-full hover:scale-105 transition-all rounded-lg"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Gallery;
