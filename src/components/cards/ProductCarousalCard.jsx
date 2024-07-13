import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { ProductContext } from "../../contexts/product-context.jsx";
import productData from "../../utils/productData.js";
import clsx from "clsx";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export const ProductCarousalCard = () => {
  const { state: productState, dispatch } = useContext(ProductContext);
  const swiperRef = useRef(null);

  useLayoutEffect(() => {
    register();
  }, []);

  const slides = productData.colors;

  useEffect(() => {
    let index = 0;
    slides.some(
      (slide, i) => slide.id === productState.color?.id && (index = i),
    );
    swiperRef.current.swiper.slideTo(index, 500);
  }, [productState.color]);

  const swipePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const swipeNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="flex flex-col gap-3">
      <div className="rounded-lg border-2">
        <img
          src={productState.color?.img}
          loading="lazy"
          className="aspect-image size-full max-h-[400px] object-contain md:max-h-[700px]"
        />
      </div>
      <div className="flex gap-3 items-center ">
        <ArrowLeft2 size={32} className="cursor-pointer" onClick={swipePrev}  />
        <div className="min-w-0">
          <swiper-container
            ref={swiperRef}
            slides-per-view={4}
            speed="500"
            loop="true"
            space-between={10}
            grabCursor="true"
            centeredSlides={true}
            initialSlide={2}
          >
            {slides.map((slide, i) => (
              <swiper-slide key={"slide" + i}>
                <div
                  className={clsx("cursor-pointer rounded-xl", {
                    "bg-gradient-to-tl from-[#2C307933] to-[#3A4980] p-[3px]":
                      productState.color?.id === slide.id,
                  })}
                >
                  <img
                    loading="lazy"
                    src={slide.img}
                    alt="slide"
                    className="rounded-lg bg-white py-3"
                    onClick={() =>
                      dispatch({ type: "CHANGE_COLOR", payload: slide })
                    }
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <ArrowRight2 size={32} className="cursor-pointer" onClick={swipeNext} />
      </div>
    </section>
  );
};
