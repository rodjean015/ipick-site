import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@fontsource/montserrat";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader"; // Import the loader

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "iPick",
  description: "Bringing you to Places.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loader /> {/* Loader is now always on top */}
        <Navbar />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
