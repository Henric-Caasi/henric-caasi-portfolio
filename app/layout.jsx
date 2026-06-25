import "./globals.css";

export const metadata = {
  title: "Henric_Caasi | Portfolio",
  description:
    "Portfolio of Rogel Henric M. Caasi, BSIT graduate focused on full-stack development, mobile apps, and IT support."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
