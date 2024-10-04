import type { Metadata } from "next";
import "./globals.css";
import StarknetProvider from "./providers/StarknetProvider";
import { i18n, type Locale } from "@/i18n-config";
import Header from "@/app/ui/Header";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.symbol }));
}

export const metadata: Metadata = {
  title: "SeamlessUI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <StarknetProvider>
        <body className={`p-8 antialiased`}>
          <Header />
          {children}
        </body>
      </StarknetProvider>
    </html>
  );
}
