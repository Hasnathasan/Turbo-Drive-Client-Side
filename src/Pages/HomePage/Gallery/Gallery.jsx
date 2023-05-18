import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallary] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallary(data.gallery));
  }, []);

  console.log(gallery);
  return (
    <div className="my-32">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">Try The Realstic Cars</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((col) => (
          <div className="grid gap-4">
            {col.map((img) => (
              <div>
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
