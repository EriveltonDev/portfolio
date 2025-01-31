import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "../shared/styles/reset.css";
import "../shared/styles/theme.css";
import { ThemeToggle } from "@/shared/presentation/components/theme-toggle";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"]
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"]
});


export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
