import axios from 'axios';
import cheerio from 'cheerio';
import qs from 'qs';
import handler from '../middlewares/async';

const Base = 'https://fastdl.app/c/';

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Type': 'application/x-www-form-urlencoded;',
  Cookie:
    '_gid=GA1.2.522344308.1694457208; __gads=ID=f786fca45f1a2dda-2212c4aa9ee30029:T=1694457207:RT=1694457207:S=ALNI_MYnzm-Z9BUhr0YeGPvxtPdmhcrTWw; __gpi=UID=00000d91cf803e99:T=1694457207:RT=1694457207:S=ALNI_MY8QN7zUi1IdPC7Ok7fKXF5q5ZInA; _gat_UA-174582130-1=1; FCNEC=%5B%5B%22AKsRol8LTZQ3e4jT9a-6_xQ4fdPhMno-yYxA3169UQBv25f4SnRDbcJFYT-MwxTxbggqH0G2ZX_kAgR7kxuYo8P6_FHBswYoNcou_oWoIJIwQUe14dK9exehXT5GbOUyvA4WEUoL0HGF59Q-utXTyyIyE6vT1jQ1sQ%3D%3D%22%5D%2Cnull%2C%5B%5D%5D; _ga_MNQG2TK2HP=GS1.1.1694457207.1.1.1694457332.38.0.0; _ga=GA1.2.2081989268.1694457208',
  Origin: 'https://fastdl.app',
  Referer: 'https://fastdl.app/',
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

const createFormData = (url) => ({
  url: url,
  lang_code: 'en',
  token: '',
});

const extractDownloadLink = (html) => {
  const $ = cheerio.load(html);
  return $('#download-btn').attr('href');
};

const instagram = handler(async (url) => {
  const formData = createFormData(url);
  const response = await axios.post(Base, qs.stringify(formData), { headers });
  const downloadLink = extractDownloadLink(response.data);
  return { status: response.status, link: downloadLink };
});

export default instagram;
