import { useRouter } from "next/navigation";

const MainFooterComponent = () => {
  const router = useRouter();
  return (
    <div className="bg-white bg-opacity-5 items-center justify-between p-4 text-gray-400">
      <div className="px-12  flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center space-x-60">
          <a
            onClick={() => router.push("/phimhay")}
            className="hover:text-lg hover:text-gray-100 transition-all duration-300"
          >
            Xem phim
          </a>
          <a
            onClick={() => router.push("/about")}
            className="hover:text-lg hover:text-gray-100 transition-all duration-300"
          >
            About
          </a>
          <a
            onClick={() => router.push("/contact")}
            className="hover:text-lg hover:text-gray-100 transition-all duration-300"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center justify-center">@2021 Rophim.net</div>
      </div>
    </div>
  );
};

export default MainFooterComponent;
