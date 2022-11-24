import { NextApiRequest, NextApiResponse } from "next";

export interface User {
  name: string;
  // age: number;
  // gender: "male" | string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === "POST") {
    const token = "안녕하세요 이건 토큰입니다?";
    res.setHeader("Set-Cookie", "cookie");
    res.status(200).json({ name: "John Doe" });
    // return res.writeHead(200, { "Set-Cookie": "mycookie=test" });
  }
}
