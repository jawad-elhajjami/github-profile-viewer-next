import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Github Profile Viewer",
  description: "Use this app to search for github profiles and view their data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
