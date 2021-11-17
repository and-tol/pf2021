// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { projects } from '../../../data';
import { IProject } from '../../../interfaces/project.interface';

export default function handler(
  { query: { slug } }: NextApiRequest,
  res: NextApiResponse
) {
  const filtered = projects.filter(
    (project: IProject) => project.slug === slug
  );

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Page with slug of ${slug} is not found` });
  }
}
