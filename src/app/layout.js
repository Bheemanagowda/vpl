import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 dark:bg-black">

        <TopBar />
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}