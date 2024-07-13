import shirt from '../../assets/white-shirt.png'
export const ProductCarousal = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="rounded-lg border-2">
        <img src={shirt} className='object-contain aspect-image max-h-[400px] md:max-h-[700px] size-full'  />
      </div>
    </section>
  );
};
