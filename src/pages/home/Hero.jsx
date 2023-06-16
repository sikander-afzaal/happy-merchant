const Hero = () => {
  return (
    <section className="relative wrapper bg-hero pt-[150px] pb-[100px] md:p-0 md:h-screen lg:min-h-[650px] 2xl:min-h-[750px] bg-cover bg-top bg-no-repeat isolate">
      <div className="contain h-full  justify-center items-center text-center gap-12">
        <img
          src="/hero-person.png"
          className="lg:block hidden w-full self-end object-contain max-w-[450px] 2xl:max-w-[561px] "
          alt=""
        />
        <div className="relative top-[5%]">
          <h3 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-primary w-max text-[32px] sm:text-[50px] lg:text-[40px]  xl:text-[56px] font-bold text-center uppercase">
            ETH's first <br /> multi-currency <br /> rewards token
          </h3>
          <img
            src="/hero-text-frame.png"
            className="w-full max-w-[600px] lg:max-w-[450px] xl:max-w-[630px] object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
