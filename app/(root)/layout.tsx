import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import { ThemeContextProvider } from "@/context/Theme";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripdly",
  description: "The best community for visitors and local language learners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <AuthProvider>
            <Topbar />

            <main>
              <LeftSidebar />

              <section className="main-container">
                <div className="w-full max-w-4xl">{children}</div>
              </section>

              <RightSidebar />
            </main>

            <Bottombar />

          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
