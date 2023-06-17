const Hero = () => {
  return (
    <section className="relative wrapper bg-hero pt-[150px] pb-[100px] md:p-0 md:h-screen lg:min-h-[650px] 2xl:min-h-[750px] bg-cover bg-top bg-no-repeat isolate">
      <div className="contain h-full  justify-center items-center text-center gap-12">
        <img
          src="/hero-person.png"
          className="lg:block hidden w-full self-end object-contain max-w-[450px] 2xl:max-w-[561px] "
          alt=""
        />
        <div className="relative top-[5%] flex justify-start items-center flex-col gap-3">
          <h3 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-primary w-max text-[23px] sm:text-[35px] lg:text-[28px]  xl:text-[35px] font-bold text-center uppercase">
            "Let's face it! <br /> A world without Jews <br /> and Blacks would
            be like <br /> a world without <br /> rats and cockroaches
          </h3>
          <img
            src="/hero-text-frame.png"
            className="w-full max-w-[600px] lg:max-w-[450px] xl:max-w-[630px] object-contain"
            alt=""
          />
          <p className="text-white absolute top-[103%] left-1/2 -translate-x-1/2 text-base sm:text-2xl">
            0xbF56e97DAbB8F6b1b0Ef1a07D1C4D9C63851381c
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
