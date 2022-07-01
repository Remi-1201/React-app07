import styled from "styled-components";
// 7-1 add useHistory to make link to other pages
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  // 7-1 add useHistory
  const history = useHistory();
  // 7-1 add onClick & flag { isAdmin }
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });

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
