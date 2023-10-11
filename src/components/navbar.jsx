import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      className="z-50 fixed w-screen py-3 md:py-4 pl-4 sm:pl-12 md:pl-24 lg:pl-32 xl:pl-40  bg-opacity-30 
        top-0 left-0 backdrop-filter backdrop-blur-lg
        "
    >
      <Link className="block w-max" href="/">
        <h1 className="text-design-base dark:text-design-text   cursor-pointer font-atyp   text-2xl font-extrabold  sm:text-xl md:text-2xl">
          Downloadit.
        </h1>
      </Link>
    </header>
  );
}
