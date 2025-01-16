"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleXemNgay = () => {
    router.push("/phimhay");
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "url('https://www.rophim.net/images/home-background.jpg') no-repeat left center/cover, linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      >
        <div className="p-20 rounded-3xl shadow-lg w-2/3 space-y-12 backdrop-blur-lg">
          <div className="flex items-center justify-center text-4xl font-bold text-white">
            <Image
              src="https://www.rophim.net/images/logo.svg"
              alt="Vercel Logo"
              width={200}
              height={64}
            />
          </div>
          <div className="flex items-center justify-center text-2xl font-bold text-white">
            <span className="text-3xl font-bold text-white text-center">
              Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục
            </span>
          </div>
          <div className="flex items-center justify-center text-2xl font-bold text-white">
            <button
              onClick={handleXemNgay}
              className=" bg-gradient-to-r from-orange-300 to-orange-200 hover:drop-shadow-2xl text-white font-bold rounded-full px-6 py-3 text-xl"
            >
              Xem Ngay 🍿
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
