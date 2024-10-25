import "./globals.css";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  weights: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal finance dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased ${splineSans.className}`}>{children}</body>
    </html>
  );
}
