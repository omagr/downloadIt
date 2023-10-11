import axios from 'axios';
import qs from 'qs';
import cheerio from 'cheerio';
import handler from '../middlewares/async';

const Base = 'https://ssstwitter.com/';

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Length': '149',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  Cookie:
    'PHPSESSID=8hjk6cmlbtc0jnus3bhppl62ps; __cflb=04dToTykDEJ51J1cp6Nm6qRNYJZjuT3QF965weXXxZ; _gid=GA1.2.1622132067.1696418685; _gat_myTracker=1; _ga=GA1.1.240440945.1696418685; __gads=ID=8c813b90f6f30541:T=1696418684:RT=1696418684:S=ALNI_MZx4yXWLXtXx4jd9XE9YnaxxfEzEQ; __gpi=UID=00000c575ce6cc9a:T=1696418684:RT=1696418684:S=ALNI_Ma835nYB_ICgdRucW01qhCbA-3sLQ; _ga_RCQKEYPTD1=GS1.1.1696418685.1.0.1696418702.43.0.0',
  'Hx-Current-Url': 'https://ssstwitter.com/',
  'Hx-Request': 'true',
  'Hx-Target': 'target',
  Origin: 'https://ssstwitter.com',
  Referer: 'https://ssstwitter.com/',
  'Sec-Ch-Ua':
    '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
};

const createFormData = (url) => ({
  id: url,
  locale: 'en',
  tt: '1f3a784cd76bd6d9a0c5898315fe0af8',
  ts: Date.now(),
  source: 'form',
});

const extractDownloadLink = (html) => {
  const $ = cheerio.load(html);
  return $('a.download_link:first').attr('href');
};

const twitter = handler(async (url) => {
  const formData = createFormData(url);
  const response = await axios.post(Base, qs.stringify(formData), { headers });
  const downloadLink = extractDownloadLink(response.data);
  return { status: response.status, link: downloadLink };
});

export default twitter;
