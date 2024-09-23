import React from 'react'
import { LinkIcon } from "@heroicons/react/solid";

const Testimonials = () => {
  return (
    <section id="clients">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <LinkIcon className="w-10 inline-block mb-4" />
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Nuestros clientes
        </h2>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        <img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727121067/logo_dan_painting_group_bg_289_o7fbsn.png" alt="Client DAN Painting Group" className="w-25 backdrop-grayscale justify-center" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, quod, quia, quae quidem quibusdam
        </p>
      </div>
    </div>
  </section>
  )
}

export default Testimonials