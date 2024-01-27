import Image from "next/image";
import speaker from "@/public/images/home/desktop/image-speaker-zx9.png";
import Button from "../Button";

function Zx9() {
  return (
    <div className="grid grid-rows-2 items-center justify-center gap-12 overflow-hidden rounded-lg bg-brand-100 py-16 text-center xl:grid-cols-2 xl:grid-rows-1 xl:gap-20 xl:text-left">
      <div className="relative flex justify-center">
        <div className="absolute top-1/2 size-[400px] -translate-y-1/2 rounded-full border border-gray-100/20" />
        <div className="absolute top-1/2 size-[500px] -translate-y-1/2 rounded-full border border-gray-100/20" />
        <div className="absolute top-1/2 size-[900px] -translate-y-1/2 rounded-full border border-gray-100/20" />
        <Image
          className="relative z-10 xl:-bottom-8 xl:scale-150"
          src={speaker}
          alt="Zx9 speaker"
          height={250}
        />
      </div>
      <div className="relative z-10">
        <h2 className="mb-6 text-5xl font-bold uppercase tracking-widest text-gray-200 md:text-6xl">
          Zx9
          <br />
          speaker
        </h2>
        <p className="mx-auto mb-12 max-w-[35ch] text-sm text-gray-200/60 xl:mx-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variation="secondary" path="/speakers">
          See product
        </Button>
      </div>
    </div>
  );
}

export default Zx9;
