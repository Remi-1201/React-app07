// 7-2 add useContext for globalState
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  // 7-1 add isAdmin
  const { image, name, isAdmin } = props;
  // 7-2 add useContext for globalState
  // - (UserContext) from UserProvider.jsx
  const context = useContext(UserContext);
  // console.log(context);
  // = {contextName: "Usako"}

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {/* 7-1 add function to judge 
      {isAdmin}=true => Edit button */}
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #55828b;
`;
// 7-1 add SEdit
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
