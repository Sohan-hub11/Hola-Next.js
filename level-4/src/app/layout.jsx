import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children, team, sohan }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="w-screen h-screen flex">
        <div className="w-[30%] bg-orange-800">{sohan}</div>
        <div className="w-[40%] bg-amber-950">{children}</div>
        <div className="w-[30%] bg-blue-950">{team}</div>
      </body>
    </html>
  );
}
