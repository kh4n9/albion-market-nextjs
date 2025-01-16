import PhimhayHeaderComponent from "@/components/PhimhayHeaderComponent";

const PhimhayPage = () => {
  return (
    <main
      className="bg-background text-foreground min-h-screen"
      style={{
        backgroundImage:
          "url('https://www.rophim.net/images/home-background.jpg')",
      }}
    >
      <PhimhayHeaderComponent />
      <h1>Phim hay</h1>
    </main>
  );
};

export default PhimhayPage;
