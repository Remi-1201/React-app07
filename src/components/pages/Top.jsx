// 7-3 add useContext
import React, { useContext } from "react";
import styled from "styled-components";
// 7-1 add useHistory to make link to other pages
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  // 7-1 add useHistory
  const history = useHistory();
  // 7-3 add setUserInfo
  const { setUserInfo } = useContext(UserContext);

  // 7-1 add onClick & flag { isAdmin }
  // 7-3 add setUserInfo
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOP PAGE</h2>
      {/* 7-1 add onClick  */}
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
