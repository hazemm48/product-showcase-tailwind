import { ProductProvider } from "../../contexts/product-context.jsx";
import { ProductDescriptionCard } from "../cards/ProductDescriptionCard.jsx";
import { ProductCarousal } from "./ProductCarousal.jsx";
import { ProductDetails } from "./ProductDetails.jsx";
import productData from "../../utils/productData.json";

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
          <ProductDescriptionCard
            description={productData.description}
            benefits={productData.benefits}
          />
        </section>
      </main>
    </ProductProvider>
  );
};
