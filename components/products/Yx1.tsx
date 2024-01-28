import Image from "next/image";
import Button from "../ui/Button";
import earphone from "@/public/images/home/desktop/image-earphones-yx1.jpg";

function Yx1() {
  return (
    <div className="grid grid-rows-2 gap-x-4 gap-y-8 xl:grid-cols-2 xl:grid-rows-1">
      <Image className="w-full rounded-lg" src={earphone} alt="Yx1 earphones" />
      <div className="flex flex-col items-center justify-center gap-10 rounded-lg bg-gray-300">
        <h2 className="text-3xl font-bold uppercase">Yx1 earphones</h2>
        <Button variation="ghost" path="/earphones">
          See product
        </Button>
      </div>
    </div>
  );
}

export default Yx1;
