import instagram from '@/scripts/instagram';
import reddit from '@/scripts/reddit';
import twitter from '@/scripts/twitter';
import youtube from '@/scripts/youtube';
import { NextResponse } from 'next/server';

const Scripts = {
  1: {
    name: 'instagram',
    download: (url) => instagram(url),
  },
  2: {
    name: 'reddit',
    download: (url) => reddit(url),
  },
  3: {
    name: 'youtube',
    download: (url) => youtube(url),
  },
  4: {
    name: 'twitter',
    download: (url) => twitter(url),
  },
};

export async function POST(REQ) {
  try {
    const { url, platform } = await REQ.json();
    const data = await Scripts[platform].download(url);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
