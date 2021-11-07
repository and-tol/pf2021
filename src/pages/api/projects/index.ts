// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../data";
import { IProject } from "../../../interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  if (req.method === "GET") {
    res.status(200).json(projects);
  }
}
