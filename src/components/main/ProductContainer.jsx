import { ProductProvider } from "../../contexts/product-context.jsx";
import { ProductCarousal } from "./ProductCarousal.jsx";
import { ProductDetails } from "./ProductDetails.jsx";

export const ProductContainer = () => {
  return (
    <ProductProvider>
      <main className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <ProductCarousal />
        </div>
        <div>
          <ProductDetails />
        </div>
        <section className="md:col-span-2">
          <h1>Product Container</h1>
        </section>
      </main>
    </ProductProvider>
  );
};
