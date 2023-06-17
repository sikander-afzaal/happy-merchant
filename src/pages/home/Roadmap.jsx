const Roadmap = () => {
  return (
    <section className="wrapper mt-20 sm:mt-[150px] pb-20">
      <div className="contain justify-start items-center flex-col gap-28">
        <h2 className="text-white font-bold uppercase  text-[40px] 2xl:text-[88px]">
          Happymap
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div className="relative">
            <img
              src="roadmap-img1.png"
              className="w-full max-w-[371px] object-contain"
              alt=""
            />
            <div className="absolute bottom-full xl:bottom-0 -translate-x-[30%] 2xl:-translate-x-1/2 xl:translate-y-[20%] translate-y-[60%] left-[15%]">
              <div className="flex justify-start items-center flex-col gap-1 absolute top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 text-center w-max">
                <p className="text-[#1a2129] text-base sm:text-lg font-comic font-normal">
                  A large, hook-shaped nose <br /> ("Jewish nose").
                </p>
              </div>
              <img
                src="/roadmap-chat1.png"
                className="max-w-[335px] object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="relative z-10">
            <img
              src="roadmap-img2.png"
              className="w-full max-w-[381px] object-contain"
              alt=""
            />
            <div className="absolute z-10 top-0 -translate-x-1/2 sm:-translate-x-[75%] -translate-y-[40%]  left-1/2 sm:left-full">
              <div className="flex justify-start items-center flex-col gap-1 absolute top-[46%] -translate-x-1/2 -translate-y-1/2 left-1/2  text-center w-max">
                <p className="text-[#1a2129] text-base sm:text-lg font-comic font-normal">
                  A yarmulke (Jewish head garment).
                </p>
              </div>
              <img
                src="/roadmap-chat2.png"
                className="max-w-[335px] object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="relative">
            <img
              src="roadmap-img3.png"
              className="w-full max-w-[375px] object-contain"
              alt=""
            />
            <div className="absolute bottom-[20%]   left-[5%] sm:left-[18%]">
              <div className="flex justify-start items-center flex-col gap-1 absolute top-1/2 -translate-x-1/2 -translate-y-1/2  left-[54%] text-center w-[80%]">
                <p className="text-[#1a2129] text-base sm:text-lg font-comic font-normal">
                  A malevolent smile, with a slightly hunched back and hands
                  being rubbed together, to indicate greed or scheming. Balding,
                  tightly curled black hair and a tightly curled black beard.[5]
                </p>
              </div>
              <img
                src="/roadmap-chat3.png"
                className="sm:w-auto w-full max-w-[342px] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
