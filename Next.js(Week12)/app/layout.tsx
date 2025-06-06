import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";


const notoSans = Noto_Sans_KR({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Pokemon Encyclopedia",
  description: "Pokemon Encyclopedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
