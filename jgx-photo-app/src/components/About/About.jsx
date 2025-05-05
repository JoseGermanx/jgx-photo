import React from 'react';
import imgFront from '../../assets/img/about.jpg';
import Typed from 'typed.js';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Auditoría SEO', 'Embudos de ventas', 'Campañas en redes sociales', 'Posicionamiento en buscadores'],
      typeSpeed: 70,
      loop: true
    });
    
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

 
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-zinc-900">
        Marketing digital que impulsa tu negocio:
        <br />
        <span ref={el} />
        </h1>
        {/* <div className=' mb-10'>
        <p className="title-font sm:text-4xl text-3xl font-medium text-white mb-5">Descarga este 
          <span className='text-yellow-600'><a href='https://jgxagency.systeme.io/ebookgratis'> Ebook GRATIS </a> </span>y descubre Por Qué Necesitas un Sitio Web, ahora!
          </p>
          <button className='bg-yellow-300 text-black p-4 rounded-md hover:bg-amber-700 hover:text-white '><a href='https://app.jgx.agency/ebookgratis'>Descargar E-book GRATIS</a></button>
          </div> */}
        <p className='text-xl mb-4'>
        Potenciamos el incremento de tus ventas con estrategias SEO y de marketing digital. Juntos, llevamos tu marca al siguiente nivel. ¡Porque tu éxito es nuestro éxito!</p>
          <p className="mb-8 leading-relaxed">
          ¡Crecemos junto a ti! 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
              ¡Hablemos!
            </a>
            {/* <<a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Trabajos anteriores
            </a>> */}
          </div>
          <div className="flex align-middle mt-2">
            <p className="mt-2 justify-center text-l">SEO - DESARROLLO WEB - MARKETING - CREACIÓN DE CONTENIDO</p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <video autoPlay loop muted playsInline className="object-cover object-center rounded">
            <source src="https://res.cloudinary.com/dh6ipg8bj/video/upload/v1727117832/Negro_y_Blanco_Comercial_Inmobiliaria_Video_de_Presentaci%C3%B3n_rmnoo2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default About