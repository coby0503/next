import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./login";

export default (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  res.status(200).json([
    // { name: "오동엽", age: 30, gender: "male" },
    // { name: "이민기", age: 28, gender: "male" },
    // { name: "유한석", age: 28, gender: "male" },
    // { name: "이경수", age: 27, gender: "male" },
    // { name: "문재민", age: 20, gender: "male" },
  ]);
};
