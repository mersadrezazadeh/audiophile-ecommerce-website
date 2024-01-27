import Button from "../Button";

function Zx7() {
  return (
    <div className="flex flex-col gap-10 rounded-lg bg-[url('../public/images/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-[40%] px-8 py-20">
      <h2 className="text-3xl font-bold uppercase">Zx7 speaker</h2>
      <div>
        <Button path="/speakers" variation="ghost">
          See product
        </Button>
      </div>
    </div>
  );
}

export default Zx7;
