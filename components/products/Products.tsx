import Zx7 from "./Zx7";
import Zx9 from "./Zx9";

function Products() {
  return (
    <section className="container flex flex-col gap-8 px-4">
      <Zx9 />
      <Zx7 />
    </section>
  );
}

export default Products;
