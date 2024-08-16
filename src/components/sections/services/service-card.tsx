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
    <article className="relative mx-auto h-[24rem] w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#07c7d2] to-[#054494] p-1 text-white mobile:h-[26rem] lg:h-[28rem] lg:w-[36rem]">
      <div className="flex h-full w-full flex-col items-start justify-around rounded-2xl bg-black px-4 py-8 sm:justify-between lg:px-8 lg:py-12">
        <h3 className="text-lg font-bold uppercase">{title}</h3>

        <div className="max-w-[23rem]">
          <h4 className="mb-1 font-semibold">{bold1}</h4>
          <p className="font-extralight max-sm:text-sm">{text1}</p>
        </div>

        <div className="max-w-[26rem]">
          <h4 className="mb-1 font-semibold">{bold2}</h4>
          <p className="font-extralight max-sm:text-sm">{text2}</p>
        </div>

        <footer className="hidden w-full items-center justify-between sm:flex">
          {footer?.map((item) => <p>{item}</p>)}
        </footer>
      </div>
    </article>
  );
}

{
  /* 
  
      <article className="relative mx-auto h-[24rem] w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#07c7d2] to-[#054494] p-1 text-white mobile:h-[26rem] lg:h-[28rem] lg:w-[36rem]">
      <div className="flex h-full w-full flex-col items-start justify-around rounded-2xl bg-black px-4 py-8 sm:justify-between lg:px-8 lg:py-12 [&>div>p]:font-extralight">
        <h3 className="text-center text-lg font-bold uppercase w-full">{title}</h3>

        <div className="w-full">
          <h4 className="mb-3 text-center font-semibold">{bold1}</h4>
          <div className="flex items-center justify-center">
            <p className="w-[45%] text-center">{text1a}</p>
            <p className="w-[45%] text-center">{text1b}</p>
          </div>
        </div>

        <div className="w-full">
          <h4 className="mb-3 text-center font-semibold">{bold2}</h4>
          <div className="flex items-center justify-center">
            <p className="w-[45%] text-center">{text2a}</p>
            <p className="w-[45%] text-center">{text2b}</p>
          </div>
        </div>

        <footer className="hidden w-full items-center justify-around sm:flex">
          {footer?.map((item) => <p>{item}</p>)}
        </footer>
      </div>
    </article>
  */
}