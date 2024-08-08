interface ServiceI {
  title: string;
  bold1: string;
  text1: string;
  bold2: string;
  text2: string;
  footer: string[] | undefined;
}

interface ServiceCardProps {
  service: ServiceI;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, bold1, text1, bold2, text2, footer } = service;
  return (
    <article className="relative mx-auto h-[24rem] mobile:h-[26rem] w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#07c7d2] to-[#054494] p-1 text-white lg:h-[28rem] lg:w-[36rem]">
      <div className="flex h-full w-full flex-col items-start justify-around rounded-2xl bg-black px-4 py-8 sm:justify-between lg:px-8 lg:py-12 [&>div>p]:font-extralight">
        <h3 className="text-lg font-bold uppercase">{title}</h3>

        <div>
          <h4 className="font-semibold">{bold1}:</h4>
          <p>{text1}</p>
        </div>

        <div>
          <h4 className="font-semibold">{bold2}</h4>
          <p>{text2}</p>
        </div>

        <footer className="hidden w-full items-center justify-between sm:flex">
          {footer?.map((item) => <p>{item}</p>)}
        </footer>
      </div>
    </article>
  );
}
