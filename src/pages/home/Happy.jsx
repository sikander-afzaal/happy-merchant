const Happy = () => {
  return (
    <section className="wrapper mt-16 sm:mt-[90px] md:mt-[120px] xl:mt-[180px]">
      <div className="lg:flex-row flex-col contain justify-center items-center gap-7 lg:gap-16">
        <div className="relative">
          <img
            src="/happy-img.png"
            className="w-full max-w-[353px] object-contain"
            alt=""
          />
          <img
            src="/happy-chat.png"
            className=" sm:w-auto w-full max-w-[400px] xl:max-w-[550px] object-contain absolute top-[5%] lg:top-[2%] z-20 right-1/2 lg:-right-[70%] xl:-right-[92%] -translate-y-1/2 lg:translate-x-0 translate-x-1/2"
            alt=""
          />
        </div>
        <div className="relative isolate lg:self-end">
          <p className="sm:absolute static left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 top-[45%] text-white sm:text-black font-comic xl:text-lg text-base font-normal  max-w-full sm:max-w-[480px] xl:max-w-[580px] w-full">
            I remember the good old days when i could invest in $ETH at a very
            low cost and make decisions on whether i should invest. The returns
            on these project were often hundreds or even thousands of times my
            initial investment. However, as more project teams entered the
            field, things changed. Nonetheless, we still had opportunities to
            invest in projects such as $Aave and $Babydoge, which still offered
            considerable returns. I could decide to HOLD!
          </p>
          <img
            src="/chat-bg.png"
            className="w-full max-w-[661px] sm:block hidden object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Happy;
