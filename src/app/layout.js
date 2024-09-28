import "./globals.css";
import Link from "next/link";
import { Inter } from 'next/font/google';
import DockWrapper from '@/components/DockWrapper';

const inter = Inter({ subsets: ['latin'] });
const imageUrl = 'https://api.ascendara.app/image/share';

export const metadata = {
  title: "Ascendara - Copy, Paste, Play.",
  description: "Download games effortlessly with Ascendara. Copy the link, paste it into the app, and download. No more waiting, weird redirects, or annoying ads.",
  keywords: "game installation, game management, PC games, ascendara, copy paste play, gaming experience, sleek UI, no extractions needed, effortless game management, Ascendara, STEAMRIP, STEAMUNLOCKED, STEAM alternatives, free games",
  twitter: {
    card: 'summary_large_image',
    title: "Ascendara - Copy, Paste, Play.",
    description: "Download games effortlessly with Ascendara. Copy the link, paste it into the app, and download. No more waiting, weird redirects, or annoying ads.",
    images: [imageUrl],
  },
  openGraph: {
    title: "Ascendara - Copy, Paste, Play.",
    description: "Download games effortlessly with Ascendara. Copy the link, paste it into the app, and download. No more waiting, weird redirects, or annoying ads.",
    url: "https://ascendara.app/",
    images: [
      {
        url: imageUrl,
        width: 1024,
        height: 512,
        alt: "Ascendara - Copy, Paste, Play.",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={inter.className}>
        <DockWrapper />
        {children}
        {/* Footer */}
        <footer className="w-full mt-auto pt-12 pb-6 px-4 md:px-12 relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-white flex items-center justify-center">
              Copyright stuff.
            </p>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}