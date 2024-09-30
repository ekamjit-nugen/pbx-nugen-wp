import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Toaster } from "./components/ui/toaster";
import { cn } from "@/lib/utils";
import NavBar from "./components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(poppins.className)}>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </main>
  );
}
