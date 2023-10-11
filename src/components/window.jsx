'use client';

export default function Window({ link }) {
  return (
    <iframe
      frameborder="0"
      className="rounded-3xl mt-20 md:mt-40 w-full aspect-video h-full border-2 border-black relative  "
      allowfullscreen
      src={link ?? ''}
    ></iframe>
  );
}
