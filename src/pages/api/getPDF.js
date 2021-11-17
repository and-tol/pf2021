import fetch from 'node-fetch';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);
const url = {
  en: `${process.env.NEXT_PUBLIC_API_HOST}/data/CV_AndrejsTolstojs_e.pdf`,
};

const handler = async (req, res) => {
  const response = await fetch(url.en);

  console.log(response);

  if (!response) {
    // throw new Error(`unexpected response ${response.statusText}`);
    throw new Error(`unexpected response`);
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=CV_AndrejsTolstojs_e.pdf'
  );

  await pipeline(response.body, res);
};

export default handler;
