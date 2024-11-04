import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center mt-28 mx-28 space-x-32">
      <div className="flex-1">
        <h1 className="font-libre-bodoni font-bold text-[#000000] text-[38px] mt-[46px] mr-60 mb-12">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="font-libre-bodoni font-medium text-[#787054] text-[28px] mb-14">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <div className="bg-[#A29875] text-white flex justify-center items-center rounded-lg w-60 h-12 text-2xl font-libre-bodoni font-medium">
          <p>Explore Now</p>
        </div>
      </div>
      <Image
        src="/images/hero.png"
        alt="Hero Image"
        width={400}
        height={560}
        className="rounded-tl-[120px] rounded-br-[120px]"
      />
    </div>
  );
};

export default Home;
