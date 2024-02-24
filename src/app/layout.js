import '@/styles/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';

import Navbar from '@/components/navbar';

export const metadata = {
  title: 'DownloadIt',
  description: 'download anything, anywhere, anytime',
};

const CalSans = localFont({
  variable: '--font-CalSans',
  src: '../../public/fonts/CalSans-SemiBold.woff2',
  display: 'swap',
});

const MatterBold = localFont({
  variable: '--font-MatterBold',
  src: '../../public/fonts/Matter-Bold.woff',
  display: 'swap',
});

const mode = 'light';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mode}>
      <body className={clsx(CalSans.className, MatterBold.className, tw_Body)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

const tw_Body =
  `mx-auto w-full max-w-[1440px] px-4 md:px-[34px] relative mt-0 mb:mt-11 flex justify-around min-h-[100vh] flex-col-reverse lg:h-[min(880px,max(630px,76vh))] lg:min-h-0 lg:flex-row`;