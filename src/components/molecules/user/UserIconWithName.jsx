// 7-2 add useContext for globalState
import React, { useContext, memo } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

// 7-4 User.jsxでsetUserInfoが再レンダリングされる時、UserIconWithNameも再レンダリングされる必要がないので、memo()で囲む。
export const UserIconWithName = memo((props) => {
  // 7-1 add isAdmin
  // 7-3 delete isAdmin
  const { image, name } = props;

  // 7-2 add useContext for globalState
  // - (UserContext) from UserProvider.jsx
  // console.log(context);
  // = {contextName: "Usako"}
  // 7-3 change context to { userInfo }
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {/* 7-1 add function to judge 
      {isAdmin}=true => Edit button */}
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});

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
