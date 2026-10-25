import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Backend and full-stack engineer with 4+ years building payment systems and microservices for global banks.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: `${profile.name} | Software Engineer`, template: `%s | ${profile.name}` },
  description,
  openGraph: {
    title: `${profile.name} | Software Engineer`,
    description,
    type: "website",
    url: profile.siteUrl,
  },
  twitter: { card: "summary", title: profile.name, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1320" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
  ],
};

// Runs before paint so the saved theme never flashes. Dark is the default.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-line py-8 text-center text-sm text-muted">
          <div className="container-x">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
