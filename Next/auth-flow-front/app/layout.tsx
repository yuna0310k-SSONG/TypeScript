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
      <body className="min-h-screen bg-gray-50">
        <Providers>
          {/* Header */}
          <Header />

          {/* 🔥 Header 높이만큼 padding-top */}
          <main className="pt-[56px] flex flex-col items-center justify-center min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
