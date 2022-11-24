import React from "react";
import { NextPageWithLayout } from "../_app";

interface Props {}

const Fruit: NextPageWithLayout<Props> = () => {
  return (
    <div>
      <div>vmfnt</div>
    </div>
  );
};
export default Fruit;

Fruit.getLayout = (page) => {
  return <div>{page}</div>;
};
