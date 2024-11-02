import Image from "next/image";

const Home = () => {
  return (
    <div className="flex space-x-[98px] mt-[95px] ml-[62px] mr-[47px] mb-[177px]">
      <div className="w-1/2 mt-[61px]">
        <h1 className="text-black font-bold text-[44px]/[53px] w-[548px]">
          Welcome To Our Website
        </h1>
        <p className="text-[32px]/[38.73px] pl-[6px] font-normal w-[571px] mt-[23px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard
        </p>
        <div className="bg-[#121212] w-[237px] h-[66px] mt-16">
          <p className="text-white text-[28px]/[33.89px] py-4 px-[43px]">Contact US</p>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          width={502}
          height={465}
          alt="hero image"
          src="/images/hero.png"
        />
      </div>
    </div>
  );
};

export default Home;
