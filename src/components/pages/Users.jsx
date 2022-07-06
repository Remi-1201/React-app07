import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// 7-1 add useLocation
// 7-3 delete useLocation
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import React, { useContext } from "react";
// 7-5 comment out UserContext
// import { UserContext } from "../../providers/UserProvider";
// 7-5 add useRecoilState
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Usapon ${val}`,
    image: "https://source.unsplash.com/p2UbTX6Uoig",
    mail: "bbb@ddd.com",
    phone: "000-222-3333",
    company: {
      name: "Apple"
    },
    website: "www.apple.com"
  };
});

export const Users = () => {
  // 7-1 add useLocation
  // 7-1 state = {isAdmin: true/false}
  // 7-1 to judge there's state or not
  // 7-3 delete useLocation & isAdmin function

  // 7-4 add UserContext, onClickSwitch functions for SecondaryButton
  // 7-5 comment out UserContext
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
      <br />
      {/* 7-4 add SecondaryButton */}
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          // 7-1 add {isAdmin}
          // 7-3 delete {isAdmin}
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
