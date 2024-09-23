import React from 'react'
import { LinkIcon } from "@heroicons/react/solid";

const Testimonials = () => {
  return (
    <section id="clients">
    <div className="container px-5 py-10 mx-auto bg-slate-400">
      <div className="text-center mb-20">
        <LinkIcon className="w-10 inline-block mb-4" />
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Marcas
        </h2>
        <a href='https://danpaintinggroup.com/' target='_blank'>
        <img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727121067/logo_dan_painting_group_bg_289_o7fbsn.png" alt="Client DAN Painting Group" className="inline-block mt-4 grayscale animate-pulse" width={200}/></a>
      </div>
    </div>
  </section>
  )
}

export default Testimonials