import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Servicios que ofrecemos
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Con más de 10 años de experiencia en social media y marketing digital. Desde la creación de aplicaciones y estrategias de marketing digital. Ofrezco soluciones a medida. Nuestra experiencia en mercados como Venezuela, España, Chile, Estados Unidos, Ecuador y Argentina son evidencia de mi visión global en la industria. Ya sea potenciando tu presencia online con desarrollo web de vanguardia o creando estrategias de marketing digital efectivas, confía en nosotros para llevar tu empresa o idea al siguiente nivel con innovación y excelencia.
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
      </div>
    </section>
  );
}

export default Skills;