import Button from "../ui/Button";

function Hero() {
  return (
    <section className="-mt-[91px] mb-36 bg-gray-800">
      <div className="container relative h-screen px-6">
        <div className="absolute left-1/2 z-20 mt-16 -translate-x-1/2 pt-20 text-center md:mt-32 xl:left-6 xl:translate-x-0 xl:text-left">
          <span className="mb-2 block text-sm font-bold uppercase tracking-[0.8em] text-gray-100/60 md:text-base">
            New product
          </span>
          <h1 className="mb-6 text-5xl font-bold text-gray-100 md:text-6xl lg:max-w-[10ch]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="mx-auto mb-12 max-w-[40ch] text-sm text-gray-100/60 md:text-base xl:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button variation="primary" path="/">
            See product
          </Button>
        </div>
        <div
          role="img"
          className="absolute right-0 top-0 z-10 size-full bg-[url('../public/images/home/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('../public/images/home/tablet/image-hero.jpg')] md:bg-contain xl:top-20 xl:bg-[url('../public/images/home/desktop/image-hero.jpg')] xl:bg-top"
        />
      </div>
    </section>
  );
}

export default Hero;
