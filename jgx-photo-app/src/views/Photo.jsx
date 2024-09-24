

import React from 'react'

export default function Photo() {
    const serviceDescription = "Servicio de fotografía profesional para eventos, books, redes sociales y publicidad";

    const galleryImages = [
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073562/jgx-photo/IMG_9609_ppbzos.jpg",
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073558/jgx-photo/front_img_f8gkkl.jpg",
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073556/jgx-photo/IMG_9406_kea20w.jpg",
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073568/jgx-photo/IMG_9929_nrmued.jpg",
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073564/jgx-photo/_MG_7554_q8rsi7.jpg",
      "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1677073557/jgx-photo/IMG_9590_rdsfzr.jpg",
    ];
  
    return (
      <div className="container mx-auto p-6">
        {/* Service Description */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fotografía profesional</h1>
          <p className="text-lg text-gray-600">{serviceDescription}</p>
        </div>
  
        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative">
                <div className="overflow-hidden">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-top rounded-md shadow-lg transform transition duration-300 group-hover:scale-105"
              />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg opacity-0 group-hover:opacity-100">JGx Photo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
