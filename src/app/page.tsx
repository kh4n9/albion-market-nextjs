import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col flex items-center justify-center w-screen text-gray-300">
      <div className="backdrop-blur-lg bg-opacity-5 p-8 rounded-lg shadow-lg items-center justify-center flex flex-col space-y-8">
        <Image
          src="https://www.rophim.net/images/logo.svg"
          alt="Vercel Logo"
          width={200}
          height={64}
        />
        <h1 className="text-3xl font-bold max-w-2xl text-center">
          Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục
        </h1>
        <button className="bg-gradient-to-r from-yellow-200 to-yellow-100 text-gray-700 px-4 py-2 rounded-full text-2xl font-bold hover:shadow-lg hover:px-6 hover:py-3 hover:text-3xl hover:shadow-yellow-100 transition-all duration-500">
          Xem Phim 🍿
        </button>
      </div>
    </div>
  );
}
