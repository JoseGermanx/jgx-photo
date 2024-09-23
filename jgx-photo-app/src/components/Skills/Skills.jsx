import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Servicios que ofrecemos
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Con más de 10 años de experiencia en social media y marketing digital, ofrecemos soluciones personalizadas que impulsan resultados. Nos especializamos en la creación de aplicaciones y estrategias digitales que destacan en mercados como Venezuela, España, Chile, Estados Unidos, Ecuador y Argentina, reflejando nuestra visión global. Ya sea optimizando tu presencia online con desarrollo web de última generación o implementando estrategias de marketing digital efectivas, somos tu aliado para llevar tu empresa o proyecto al siguiente nivel, siempre con innovación y excelencia. Confía en nosotros para transformar tu visión en éxito.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 mt-7">
            Escucha el podcast sobre tecnología e internet
          </h2>
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/2N1bg2pyoacAZlBVZdTzRq?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default Skills;
