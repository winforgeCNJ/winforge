interface ServiceProp {
  service: {
    title: string;
    bold1: string;
    text1: string;
    bold2: string;
    text2: string;
    footer: string[];
  };
  className: string;
}

export default function ServiceCard({
  service: { title, bold1, text1, bold2, text2, footer },
  className,
}: ServiceProp) {
  return (
    <article
      className={`${className} duration-1000 relative h-[24rem] w-[30rem] overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-[#2a3435] to-[#2e2e2ed3] p-1 text-white transition-all`}
    >
      <div className="flex h-full w-full flex-col items-start justify-between rounded-2xl bg-black px-4 py-8 lg:px-8 lg:py-12">
        <h3 className="text-lg font-bold uppercase">{title}</h3>

        <div>
          <h4 className="font-semibold">{bold1}</h4>
          <p>{text1}</p>
        </div>

        <div>
          <h4 className="font-semibold">{bold2}</h4>
          <p>{text2}</p>
        </div>

        <footer className="flex w-full items-center justify-between">
          {footer.map((item) => (
            <p className="w-full text-justify">{item}</p>
          ))}
        </footer>
      </div>
    </article>
  );
}
