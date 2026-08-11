import { Geist, Geist_Mono, Lexend_Deca } from "next/font/google";
import "./globals.css";
import GreaterTheory from 'next/font/local';
import NexaLight from 'next/font/local';
import { TriggerProvider } from "@/context/TriggerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const greaterTheory = GreaterTheory({
  src: '../public/fonts/GreaterTheory.otf',
  variable: "--font-greater-theory",
});

const nexaLight = NexaLight({
  src: '../public/fonts/NexaLight.otf',
  variable: "--font-nexa-light",
});

export const metadata = {
  title: "Crosslinks - The Face of NSUT",
  description: "Crosslinks - The Face of NSUT",
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendDeca.variable} ${greaterTheory.variable} ${nexaLight.variable} antialiased`}>
        <TriggerProvider>
          {children}
        </TriggerProvider>
      </body>
    </html>
  );
}
