interface ServiceI {
  title: string;
}

interface ServiceCardProps {
  service: ServiceI;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="mx-auto w-auto lg:w-[36rem] h-[26rem] lg:h-[28rem] bg-gradient-to-r from-primary via-[#07c7d2] to-[#054494]  text-white  rounded-2xl relative overflow-hidden p-1 ]">
      <div className="flex flex-col lg:px-8 px-4 py-8 lg:py-12 items-start justify-between w-full h-full bg-black rounded-2xl ">
        <h3 className="font-bold text-lg uppercase">{service.title}</h3>

        <div>
          <h4 className="font-semibold">Manual de marca:</h4>
          <p>
            Logo, Isologo, Isotopo, Nombre, Branding, PLateta de colores
            institucionales, Tipografías
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Espíritu de la marca:</h4>
          <p>Misión, Visión, Valores, Voz y Tono.</p>
        </div>

        <footer className="w-full flex items-center justify-between">
          <p>Página web.</p>
          <p>Eventos.</p>
          <p>Diseño editorial.</p>
        </footer>
      </div>
    </article>
  );
}
