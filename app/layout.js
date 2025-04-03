import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Header from "@/components/Header";



const geist = Geist({
  variable: "--font-geist-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Github Profile Viewer",
  description: "Use this app to search for github profiles and view their data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
