import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Joy AI",
  description: "Discover the Joy of AI: Empowering Tomorrow, Today.",
  icons: {
    icon: [
      "/images/icons/joy-ai-icon.png"
    ],
    apple: [
      "/images/icons/joy-ai-icon.png"
    ],
    shortcut: [
      "/images/icons/joy-ai-icon.png"
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
