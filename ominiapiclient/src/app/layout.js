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
          <main
            style={{
              flex: 1,
              padding: "1.5rem",
              backgroundColor: "#181a1b",
              minHeight: "100vh",
              color: "#39ff14",
              fontFamily: "var(--font-geist-sans), var(--font-geist-mono), monospace",
              boxShadow: "0 0 24px #39ff1466 inset",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
