'use client';

import Input from '@/components/input';
import Window from '@/components/window';
import { useState } from 'react';

export default function Home() {
  const [link, setLink] = useState();
  return (
    <main className="mt-36">
      <span
        className=" font-atyp leading-[48px] sm:leading-[60px]  text-[2.5rem] 
     sm:text-6xl
       font-extrabold dark:text-design-secBase text-design-dirtext"
      >
        Empowering <br /> digital landscape, download
        <br />
        <strong className="text-transparent font-extrabold  outline outline-1 font-outline-2-lig dark:font-outline-2-dark">
          anything, anytime, anywhere.
        </strong>
      </span>
      <Input setLink={setLink} />
      <Window link={link} />
    </main>
  );
}
