import React from 'react';
import imgFront from '../../assets/img/about.jpg';
import Typed from 'typed.js';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Marketing digital', 'Auditoría SEO', 'Embudos de ventas', 'Campañas en redes sociales', ],
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
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 className='text-xl mb-4'>
        Potencia tu crecimiento con estrategias SEO y de marketing digital diseñadas para transformar ideas en resultados. Juntos, llevamos tu marca al siguiente nivel. ¡Porque tu éxito es nuestro éxito!</h2>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <i>Impulsamos tu negocio con:</i>
          <br />
          <span ref={el} />
          </h1>
          <p className="mb-8 leading-relaxed">
          ¡Crecemos junto a ti! 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              ¡Trabajemos juntos!
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