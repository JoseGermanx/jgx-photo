import React from 'react'
import { LinkIcon } from "@heroicons/react/solid";

const Testimonials = () => {
  return (
    <section id="clients">
    <div className="container px-5 py-10 mx-auto bg-white">
      <div className="text-center mb-20">
        <LinkIcon className="w-10 inline-block mb-4" />
        <h2 className="sm:text-6xl text-2xl font-medium title-font text-zinc-900 mb-4">
          Clientes
        </h2>
        <a className="mx-7" href='https://danpaintinggroup.com/' target='_blank'>
        <img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727121067/logo_dan_painting_group_bg_289_o7fbsn.png" alt="Client DAN Painting Group - Orlando" className="inline-block mt-4 animate-pulse" width={200}/></a>
       <a href='https://www.tanniesfoods.com/' target='_blank'>
        <img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1730300686/Tannies-06_rfsryn.avif" alt="Client Tannies Food - Orlando" className="inline-block mt-4 animate-pulse" width={200}/></a>
        </div>
     
      
    </div>
  </section>
  )
}

export default Testimonials