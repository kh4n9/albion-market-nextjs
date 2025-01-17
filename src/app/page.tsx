import MainFooterComponent from "@/components/MainFooterComponent";
import MainHeaderComponent from "@/components/MainHeaderComponent";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col dark:bg-gray-800 dark:text-white">
      <MainHeaderComponent />
      <div className="flex-1 flex justify-center">
        <h1 className="text-4xl">Home Page</h1>
      </div>
      <MainFooterComponent />
    </div>
  );
};

export default HomePage;
