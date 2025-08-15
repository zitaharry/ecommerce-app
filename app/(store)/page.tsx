import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //   `>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // )

  return (
    <div>
      <h1>Hello Ecommerce App</h1>

      <div className="flex flex-col items-center justify-top min-h-screen">
        <ProductView />
      </div>
    </div>
  );
}
