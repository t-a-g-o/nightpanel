import "./globals.css";
import Link from 'next/link';
import { Inter } from 'next/font/google';
import DockWrapper from '@/components/DockWrapper'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "NightPanel - A Website Template",
  description: "A sleek, dark-themed interface that offers a clean and organized experience, perfect for showcasing content with style and simplicity.",
  keywords: "tags, for, easy, searching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DockWrapper />
        {children}
        <footer className="w-full mt-auto pt-12 pb-6 px-4 md:px-12 relative z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <span className="cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <span className="cursor-pointer">Terms of Service</span>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-white mr-2">NightPanel Website Template</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}