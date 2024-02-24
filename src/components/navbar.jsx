import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      className="flex flex-row items-center justify-between mx-auto absolute w-full bg-opacity-30 
        top-0 left-0 pt-2 px-[20px] md:px-[34px] backdrop-filter backdrop-blur-lg"
    >
      <Link className="block w-max" href="/">
        <h1 className="text-design-base dark:text-design-text cursor-pointer text-2xl font-extrabold  sm:text-xl md:text-2xl">
          Download.it
        </h1>
      </Link>

      <Link href="https://twitter.com/om_agr">👉 omagr</Link>
    </header>
  );
}
