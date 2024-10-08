import {
  ProductColorsCard,
  ProductDeliveryCard,
  ProductNameCard,
  ProductPriceCard,
  ProductSizesCard,
} from "./ProductDetailsCards.jsx";
import { useContext, useLayoutEffect } from "react";
import { ProductContext } from "../../contexts/product-context.jsx";
import productData from "../../utils/productData.js";
import { ProductPurchaseCard } from "./ProductPurchaseCard.jsx";

export const ProductDetailsCard = () => {
  const { state: productState, dispatch } = useContext(ProductContext);

  useLayoutEffect(() => {
    dispatch({
      type: "CHANGE_SIZE",
      payload: { size: productData.sizes[0], discount: productData.discount },
    });
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
        price={productState.discountPrice}
        oldPrice={productState.price}
      />
      <hr />
      <ProductColorsCard colors={productData.colors} />
      <hr />
      <ProductSizesCard
        sizes={productData.sizes}
        discount={productData.discount}
      />
      <hr />
      <ProductPurchaseCard />
      <ProductDeliveryCard freeDelivery={productData.free_delivery} />
    </div>
  );
};
