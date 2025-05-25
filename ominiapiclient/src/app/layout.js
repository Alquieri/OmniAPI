import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OmniAPI",
  description: "Dashboard com CRUD",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          background: "#111",
          color: "#39ff14",
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
