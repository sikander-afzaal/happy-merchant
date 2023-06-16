const Tokenomics = () => {
  return (
    <section className="wrapper relative mt-16 sm:mt-[100px] lg:mt-[180px]">
      <div className="contain lg:flex-row flex-col relative py-24 isolate  justify-center items-center gap-10">
        <img
          src="/tokenomics-bg.png"
          className="w-full h-full object-cover md:object-fill absolute left-0 top-0 -z-10"
          alt=""
        />
        <div className="flex justify-center items-center lg:items-start  flex-col gap-4">
          <p className="text-[#1a2129] font-bold bg-tokenomicsText px-10 py-8 bg-fill bg-no-repeat bg-center uppercase text-xl sm:text-[30px] 2xl:text-[42px]">
            Token Symbol: <span className="text-secondary ">$JEW</span>
          </p>
          <p className="text-[#1a2129] font-bold bg-tokenomicsText px-10 py-8 bg-fill bg-no-repeat bg-center uppercase text-xl sm:text-[30px] 2xl:text-[42px]">
            Total Supply: <span className="text-secondary ">18 million</span>
          </p>
        </div>
        <img
          src="/chart.png"
          className="w-full max-w-[400px] xl:max-w-[543px] object-contain"
          alt=""
        />
      </div>
    </section>
  );
};

export default Tokenomics;
