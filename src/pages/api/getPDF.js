import fetch from 'node-fetch';
import stream from 'stream';
import { promisify } from 'util';
import { NAME_CV_FILE } from '../../constants/constants';

const pipeline = promisify(stream.pipeline);
const url = {
  en: `${process.env.API_HOST}/data/${NAME_CV_FILE}`,
};

const handler = async (req, res) => {
  const response = await fetch(url.en);

  console.log(response);

  if (!response) {
    // throw new Error(`unexpected response ${response.statusText}`);
    throw new Error(`unexpected response`);
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${NAME_CV_FILE}`);

  // @ts-ignore
  await pipeline(response.body, res);
};

export default handler;
