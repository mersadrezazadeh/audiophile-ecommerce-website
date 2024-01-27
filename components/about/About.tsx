function About() {
  return (
    <section className="container mb-28 grid grid-rows-[2fr,1fr] items-center gap-8 px-4 text-center xl:grid-cols-2 xl:grid-rows-1 xl:text-left">
      <div
        role="img"
        className="h-[500px] w-full rounded-lg bg-[url('../public/images/shared/mobile/image-best-gear.jpg')] bg-cover bg-center md:bg-[url('../public/images/shared/tablet/image-best-gear.jpg')] xl:order-2 xl:bg-[url('../public/images/shared/desktop/image-best-gear.jpg')]"
      />
      <div className="space-y-8">
        <h2 className="mx-auto max-w-[15ch] text-5xl font-bold uppercase text-gray-800">
          Bringing you the <span className="text-brand-100">best</span> audio
          gear
        </h2>
        <p className="text-gray-800/70">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

export default About;
