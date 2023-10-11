import axios from 'axios';
import cheerio from 'cheerio';
import qs from 'qs';
import handler from '../middlewares/async';

const Base = 'https://savemp4.red/backend.php';

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  Referer:
    'https://savemp4.red/?url=https://www.reddit.com/r/AnimeMirchi/comments/ui3kh2/agar_mai_kahoon_oc/?utm_source=share&utm_medium=web2x&context=3',
  'Sec-Ch-Ua':
    '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'X-Requested-With': 'XMLHttpRequest',
};

const createFormData = (url) => {
  const data = {};
  const uri = url.split(/[?&]/);
  for (let i = 0; i < uri.length; i++) {
    if (i === 0) {
      data['url'] = uri[i];
    } else {
      const ele = uri[i].split('=');
      data[ele[0]] = ele[1];
    }
  }
  const params = { url };
  const body = {
    url: `${data['url']}?utm_source=${data['utm_source']}`,
    utm_medium: data['utm_medium'],
    context: data['context'],
  };
  return { params, body };
};

const extractDownloadLink = (html) => {
  const $ = cheerio.load(html);
  return $('.card-img-top').find('source').attr('src');
};

const reddit = handler(async (url) => {
  const { params, body } = createFormData(url);
  const response = await axios.post(Base, qs.stringify(body), {
    headers,
    params,
  });
  const downloadLink = extractDownloadLink(response.data);
  return { status: response.status, link: downloadLink };
});

export default reddit;
