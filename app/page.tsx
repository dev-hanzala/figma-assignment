import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center my-[118px] mx-28 space-x-32">
      <div className="flex-1">
        <h1 className="font-libre-bodoni font-bold text-[#000000] text-[38px] mt-[46px] mr-60 mb-12">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="font-libre-bodoni font-medium text-[#787054] text-[28px] mb-14">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <div className="bg-[#A29875] text-white flex justify-center items-center rounded-lg w-[248px] h-[50px] text-[26px]/[32px] font-libre-bodoni font-medium">
          <p>Explore Now</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-6 left-5 right-5 bottom-6 border-[0.88px] border-white rounded-tl-[128px] rounded-br-[128px]"></div>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={421}
          height={574}
          className="rounded-tl-[128px] rounded-br-[128px] w-[421px] h-[574px]"
        />
      </div>
    </div>
  );
};

export default Home;
