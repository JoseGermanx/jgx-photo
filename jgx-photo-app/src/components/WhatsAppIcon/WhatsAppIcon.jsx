import React from 'react';
import whatsappIcon from '../../assets/img/image.png'; // Add a WhatsApp icon image to your assets folder

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/56984772281" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
    </a>
  );
};

export default WhatsAppIcon;