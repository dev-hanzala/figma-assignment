import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#A29875] flex justify-between items-center py-4 px-[56px]">
      <div className="flex items-center space-x-1">
        <Image
          src="/vectors/logo.svg"
          alt="Logo"
          width={64}
          height={70}
          className="rounded-full"
        />
        <h1 className="text-[68px] font-rye text-white m-0">urity</h1>
      </div>
      <div className="bg-[#F8F8F8] p-2 rounded-lg flex items-center w-1/2 relative">
        <input
          type="text"
          className="w-full p-2 bg-transparent"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
        />
        <Image
          src="/vectors/search.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute right-2"
        />
      </div>
      <div className="flex space-x-10">
        <Image
          src="/vectors/favourites.svg"
          alt="Favourites Icon"
          width={28}
          height={28}
        />
        <Image
          src="/vectors/profile.svg"
          alt="Profile Icon"
          width={28}
          height={28}
        />
        <Image src="/vectors/cart.svg" alt="Cart Icon" width={28} height={28} />
      </div>
    </div>
  );
};

export default Header;
