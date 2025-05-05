import usePageSEO from "../hooks/usePageSEO";


const ServicioSEO = () => {
    usePageSEO({
        title: "Servicios de SEO - Posicionamiento en Buscadores",
        description:
          "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
        keywords: ["Marketing", "SEO"],
        ogTitle: "Servicios de SEO - Posicionamiento en Buscadores",
        ogDescription: "Somos una agencia digital especializada en marketing digital y SEO. Nuestro equipo de expertos en marketing digital y SEO te ayudará a alcanzar tus objetivos en internet. Contáctanos para obtener más información.",
        ogImage: "https://res.cloudinary.com/dh6ipg8bj/image/upload/v1727211451/Purple_Black_Modern_Marketing_Plan_Presentation_eabtxb.png",
        ogUrl: "https://www.jgx.agency/",
      });
    
    return (
    <section className="bg-white px-6 mb-4">
        <img src="https://res.cloudinary.com/dh6ipg8bj/image/upload/v1746479857/SEO_yhxk3n.png" alt="SEO" className="left-0 min-w-full" />

      <div className="max-w-5xl mx-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Posicionamiento en Buscadores (SEO)</h1>
        <p className="text-lg text-gray-700 mb-4">
          El <strong>servicio de SEO</strong> de Betacode te ayuda a aparecer en los primeros resultados de Google cuando tus clientes buscan los productos o servicios que ofreces. Nuestro enfoque combina estrategia, técnica y contenido para impulsar el tráfico orgánico de tu sitio web.
        </p>
        <p className="text-gray-600 mb-6">
          Un buen posicionamiento SEO no solo mejora tu visibilidad, sino que también <strong>incrementa tus oportunidades de venta sin necesidad de pagar por publicidad</strong>. Nos enfocamos en atraer tráfico cualificado que convierta.
        </p>
  
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">¿Qué incluye nuestro servicio SEO?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Auditoría técnica completa de tu sitio web</li>
              <li>Optimización de velocidad, estructura y rendimiento</li>
              <li>Investigación de palabras clave relevantes para tu negocio</li>
              <li>Creación y mejora de contenido enfocado en SEO</li>
              <li>SEO local para captar clientes en tu zona</li>
              <li>Link building estratégico (backlinks de calidad)</li>
              <li>Informes mensuales con métricas clave y progreso</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Beneficios del SEO para tu negocio</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Aumento sostenido de tráfico orgánico</li>
              <li>Mejor visibilidad frente a tus competidores</li>
              <li>Más oportunidades de venta a largo plazo</li>
              <li>Reducción en dependencia de anuncios pagos</li>
              <li>Mayor autoridad y confianza en tu sector</li>
            </ul>
          </div>
        </div>
  
        <a href="/contacto" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Quiero aparecer en Google
        </a>
      </div>
    </section>
  );
}

  export default ServicioSEO;

  