import "@/app/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Albion Market App</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
