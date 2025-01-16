"use client";

import "@/app/globals.css";
import MainFooterComponent from "@/components/MainFooterComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-screen flex flex-col"
      style={{
        backgroundImage:
          "url('https://www.rophim.net/images/home-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <body className="bg-white bg-opacity-5 flex flex-1 overflow-auto">
        {children}
      </body>
      <MainFooterComponent />
    </html>
  );
}
