import "./globals.css";

export const metadata = {
  title: "Rogel Henric M. Caasi | Web Developer",
  description:
    "Portfolio of Rogel Henric M. Caasi, a web developer building React, Next.js, Laravel, and mobile-friendly systems.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-bg-deep text-white">
        {children}
      </body>
    </html>
  );
}
