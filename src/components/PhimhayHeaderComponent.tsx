import Image from "next/image";

const PhimhayHeaderComponent = () => {
  return (
    <header className="bg-white bg-opacity-5 flex items-center justify-between p-4">
      <div>
        <Image
          src="https://www.rophim.net/images/logo.svg"
          alt="Vercel Logo"
          width={100}
          height={64}
        />
      </div>
      <div>
        {/* search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 p-2 rounded-lg"
        />
      </div>
    </header>
  );
};

export default PhimhayHeaderComponent;
