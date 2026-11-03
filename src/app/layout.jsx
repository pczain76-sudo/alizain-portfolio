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
  title: "Ali Zain — Frontend & MERN Stack Developer",
  description:
    "Portfolio of Ali Zain, a passionate Frontend Developer building responsive, interactive web apps with HTML, CSS, JavaScript, React and the MERN stack.",
  keywords: [
    "Ali Zain",
    "Frontend Developer",
    "MERN Stack Developer",
    "Web Developer Pakistan",
    "React Developer",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Ali Zain" }],
  creator: "Ali Zain",
  openGraph: {
    title: "Ali Zain — Frontend & MERN Stack Developer",
    description:
      "Passionate Frontend Developer building responsive, interactive web apps with React and the MERN stack.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Zain — Frontend & MERN Stack Developer",
    description:
      "Passionate Frontend Developer building responsive, interactive web apps with React and the MERN stack.",
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
