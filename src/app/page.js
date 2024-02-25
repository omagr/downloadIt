import Input from '@/components/input';

export default function Home() {
  return (
    <main className="md:mt-20 max-h-full">
      <span className={font_style_for_cal_tw}>
        {' '}
        Empowering <br /> digital landscape for everyone.
        <p className=" mt-5 text-2xl w-full">
          {' '}
          download anything, anytime, anywhere.{' '}
        </p>
        <p className=" text-base w-full">
          {' '}
          *only available for reddit, youtube, instagram, twitter (x.com){' '}
        </p>
      </span>
      <Input />
    </main>
  );
}

const font_style_for_cal_tw =
  'font-cal leading-[100%] md:!leading-xl text-[40px] tracking-[-0.002em] md:text-[75px] lg:text-[79px] xl:text-[114px] text-shadow-gray !text-[clamp(52px,_7.45vw,_114px)] xl:text-[clamp(52px,_7.8vw,_114px)]';
