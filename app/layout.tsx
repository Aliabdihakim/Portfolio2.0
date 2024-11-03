import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Abdihakim",
  description: "Ali Abdihakim developer portfolio!",
};

const setInitialTheme = `
  (function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(savedTheme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
