import React from "react";
import styled from "styled-components";
import { NextPageWithLayout } from "../_app";

interface Props {}

const User: NextPageWithLayout<Props> = () => {
  return (
    <div>
      <div>안녕하세요</div>
    </div>
  );
};
export default User;

User.getLayout = function getLayout(page: React.ReactElement) {
  return <Wrap>{page}</Wrap>;
};

const Wrap = styled.div`
  background-color: lightblue;
  color: red;
`;
