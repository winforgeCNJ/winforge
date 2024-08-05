interface ServiceI {
  title: string;
}

interface ServiceCardProps {
  service: ServiceI;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className=" relative mx-auto h-[26rem] w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#07c7d2] to-[#054494] p-1 text-white lg:h-[28rem] lg:w-[36rem]">
      <div className="flex h-full w-full flex-col items-start justify-between rounded-2xl bg-black px-4 py-8 lg:px-8 lg:py-12">
        <h3 className="text-lg font-bold uppercase">{service.title}</h3>

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

        <footer className="flex w-full items-center justify-between">
          <p>Página web.</p>
          <p>Eventos.</p>
          <p>Diseño editorial.</p>
        </footer>
      </div>
    </article>
  );
}
