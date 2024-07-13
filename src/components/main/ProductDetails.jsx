import {
  ProductColorsCard,
  ProductDeliveryCard,
  ProductNameCard,
  ProductPriceCard,
  ProductSizesCard,
} from "../cards/ProductDetailsCards.jsx";
import { useContext, useLayoutEffect } from "react";
import { ProductContext } from "../../contexts/product-context.jsx";
import productData from "../../utils/productData.json";
import { ProductPurchaseCard } from "../cards/ProductPurchaseCard.jsx";

export const ProductDetails = () => {
  const { state: productState, dispatch } = useContext(ProductContext);

  useLayoutEffect(() => {
    dispatch({ type: "CHANGE_SIZE", payload: productData.sizes[0] });
    dispatch({ type: "CHANGE_COLOR", payload: productData.colors[0] });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <ProductNameCard
        name={productData.name}
        brand={productData.brand}
        likes={productData.likes}
      />
      <hr />
      <ProductPriceCard
        price={productState.price * (1 - productData.discount)}
        oldPrice={productState.price}
      />
      <hr />
      <ProductColorsCard colors={productData.colors} />
      <hr />
      <ProductSizesCard sizes={productData.sizes} />
      <hr />
      <ProductPurchaseCard />
      <ProductDeliveryCard freeDelivery={productData.free_delivery} />
    </div>
  );
};
