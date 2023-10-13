'use client';
import { socialMedia } from '@/helpers/utils';
import { Scripts } from '@/lib/icons';
import { Spinner } from '@/lib/spin';
import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line
const urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

const base = '/api/backend/';

export default function Input({ setLink }) {
  const [platform, setPlatform] = useState(0);
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);

  const download = (url) => {
    const element = document.createElement('a');
    element.href = url;
    element.download = Date.now();
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  async function handleSubmit() {
    if (!platform) return console.log('invalid request');
    setLoading(true);
    try {
      const response = await fetch(base, {
        method: 'POST',
        body: JSON.stringify({ url, platform }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (data.status != 200) return console.log('something went wrnog!');
      setLink(data.link);
      download(data.link);
    } catch (error) {
      console.log(error, 'something went wrnog!');
    } finally {
      setLoading(false);
      setPlatform(0);
      setUrl('');
    }
  }

  useEffect(() => {
    if (!url) return;
    if (!urlRegex.test(url)) return console.log('invalid url');
    const sm = socialMedia(url);
    if (!sm) return console.log('invalid platform');
    setPlatform(sm);
  }, [url]);

  return (
    <section className="flex flex-col md:flex-row gap-6 ">
      <div className="relative w-full mt-4 md:mt-14 py-5 md:py-6 bg-design-grytext dark:bg-design-tirBase text-design-dirtext rounded-3xl border border-1 border-design-dirtext shadow-des hover:shadow-none hover:translate-y-1">
        <span className="absolute w-16 md:w-24 min-h-full top-0 rounded-l-3xl   font-atyp font-bold border-r-2 border-dashed border-design-dirtext grid place-content-center text-2xl  ">
          {platform != 0 ? Scripts[platform].icon() : '👋🏼'}
        </span>
        <input
          autoFocus
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          className=" 
              w-full pl-20 select-all md:pl-28 text-base font-atyp font-bold bg-transparent focus:outline-none"
          placeholder="https://"
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="group relative w-full md:w-1/4 md:mt-14 py-5 md:py-6 bg-design-grytext dark:bg-design-tirBase text-design-dirtext rounded-3xl border border-1 border-design-dirtext shadow-des hover:shadow-none hover:translate-y-1 flex justify-center items-center gap-2"
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            {' '}
            <p className="min-h-full top-0 rounded-l-3xl  text-base font-atyp font-bold   border-design-dirtext">
              Download
            </p>
            <strong className="group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M21.533 17.3333H6.66635C6.28857 17.3333 5.97168 17.2053 5.71568 16.9493C5.45968 16.6933 5.33212 16.3769 5.33301 16C5.33301 15.6222 5.46101 15.3053 5.71701 15.0493C5.97301 14.7933 6.28946 14.6658 6.66635 14.6667H21.533L17.733 10.8667C17.4663 10.6 17.3383 10.2889 17.349 9.93334C17.3597 9.57778 17.4877 9.26667 17.733 9.00001C17.9997 8.73334 18.3166 8.59423 18.6837 8.58267C19.0508 8.57112 19.3672 8.69912 19.633 8.96667L25.733 15.0667C25.8663 15.2 25.961 15.3445 26.017 15.5C26.073 15.6556 26.1006 15.8222 26.0997 16C26.0997 16.1778 26.0717 16.3445 26.0157 16.5C25.9597 16.6556 25.8655 16.8 25.733 16.9333L19.633 23.0333C19.3663 23.3 19.0499 23.428 18.6837 23.4173C18.3175 23.4067 18.0006 23.2676 17.733 23C17.4886 22.7333 17.3606 22.4222 17.349 22.0667C17.3375 21.7111 17.4655 21.4 17.733 21.1333L21.533 17.3333Z"
                  fill="#101010"
                />
              </svg>
            </strong>
          </>
        )}
      </button>
    </section>
  );
}

// useEffect(() => {
//     console.log('value');
//     input.current.focus();
//     // Read from the clipboard when the component mounts
//     const readClipboard = async () => {
//         try {
//             const text = await navigator.clipboard.readText();
//             //   setCopiedText(text);
//             console.log(text);
//         } catch (error) {
//             console.error('Error reading text from clipboard:', error);
//         }
//     };
//     readClipboard();
//     // async () => {
//     //     try {
//     //         const value = await navigator.clipboard.readText();
//     //         console.log(value)
//     //         if (input.current) {
//     //             input.current.value = value;
//     //         }
//     //     } catch (error) {
//     //         console.error('Error reading text from clipboard:', error);
//     //     } finally {
//     //         input.current.focus()
//     //     }
//     // }
//     return;
// }, []);
