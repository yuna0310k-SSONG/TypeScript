import "./globals.css";
import Header from "@/components/Header";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <Providers>
          {/* Header */}
          <Header />

          <main className="flex flex-col items-center ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
