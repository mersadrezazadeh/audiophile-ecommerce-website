import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import Products from "@/components/products/Products";
import About from "@/components/about/About";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <About />
    </>
  );
}

export default HomePage;
