import '@/styles/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AtypDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/AtypDisplay-Medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AtypDisplay-Semibold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AtypText-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-AtypDisplay',
});

export const metadata = {
  title: 'DownloadIt',
  description: 'download anything, anywhere, anytime',
};

const mode = 'light';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mode}>
      <body className={clsx(AtypDisplay.variable, tw_Body)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const tw_Body =
  'flex min-h-screen flex-col justify-top items-left p-4 sm:p-12 md:p-24 lg:p-32 xl:p-40 dark:bg-design-base bg-design-ligbase scroll-smooth';
