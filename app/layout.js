import { Inter, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kannadaFont = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["kannada", "latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Wedding Invitation | Abhishek & Sagarika",
  description:
    "A wedding invitation for Abhishek Shetty & Sagarika with ceremony details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kannadaFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
