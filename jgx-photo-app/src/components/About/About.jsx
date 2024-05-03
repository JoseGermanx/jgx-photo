import React from 'react';
import imgFront from '../../assets/img/about.jpg';
import Typed from 'typed.js';

const About = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Impulsamos tu negocio con:</i>', 'Marketing digital, ', 'Growth hacking', 'Mejoras de procesos de ventas', 'Campañas en redes sociales'],
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
        <h2 className='text-xl mb-4'>Impulsamos tu crecimiento con estrategias innovadoras y colaborativas. ¡Si tu ganas, nosotros también!"</h2>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <span ref={el} />
          </h1>
          <p className="mb-8 leading-relaxed">
          ¡Crecemos junto a ti! 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja con nosotros
            </a>
            {/* <<a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Trabajos anteriores
            </a>> */}
          </div>
          <div className="flex align-middle mt-2">
            <p className="mt-2 justify-center text-l">SEO - DESARROLLO WEB - MARKETING - FOTOGRAFIA</p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={imgFront}
          />
        </div>
      </div>
    </section>
  )
}

export default About