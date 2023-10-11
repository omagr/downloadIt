import axios from 'axios';
import qs from 'qs';
import handler from '../middlewares/async';

const Base = 'https://api.ytbvideoly.com/api/thirdvideo/parse';

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Length': '81',
  'Content-Type': 'application/x-www-form-urlencoded',
  Origin: 'https://www.ytbvideoly.com',
  'Sec-Ch-Ua':
    '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-site',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
};

const createFormData = (url) => ({
  link: url,
  from: 'videodownloaded',
});

const extractDownloadLink = (response) => {
  // '----audios: ', html.data.audios;
  // '----thumbnail: ', html.data.thumbnail;
  // '----videos: ', html.data.videos;
  const data = response.data.videos.mp4[1] || response.data.videos.mp4[0];
  const link = data.url;
  return link;
};

const youtube = handler(async (url) => {
  const formData = createFormData(url);
  const response = await axios.post(Base, qs.stringify(formData), { headers });
  const downloadLink = extractDownloadLink(response.data);
  return { status: response.status, link: downloadLink };
});

export default youtube;
