import { ProductProvider } from "../../contexts/product-context.jsx";
import { ProductDescriptionCard } from "../cards/ProductDescriptionCard.jsx";
import { ProductCarousalCard } from "../cards/ProductCarousalCard.jsx";
import { ProductDetailsCard } from "../cards/ProductDetailsCard.jsx";
import productData from "../../utils/productData.js";

export const ProductContainer = () => {
  return (
    <ProductProvider>
      <main className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <ProductCarousalCard />
        </div>
        <div>
          <ProductDetailsCard />
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
