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

export const metadata = {
  title: "Ali Zain — Full Stack Developer",
  description:
    "Portfolio of Ali Zain, a passionate Next.js Full Stack Developer building responsive, interactive web apps with React, Next, JavaScript, Tailwind, Electron.js, MERN + PERN.",
  keywords: [
    "Ali Zain",
    "Frontend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Web Developer Pakistan",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Ali Zain" }],
  creator: "Ali Zain",
  openGraph: {
    title: "Ali Zain — Full Stack Developer",
    description:
      "Portfolio of Ali Zain, a passionate Next.js Full Stack Developer building responsive, interactive web apps with React, Next, JavaScript, Tailwind, Electron.js, MERN + PERN.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Zain — Full Stack Developer",
    description:
      "Portfolio of Ali Zain, a passionate Next.js Full Stack Developer building responsive, interactive web apps with React, Next, JavaScript, Tailwind, Electron.js, MERN + PERN.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
