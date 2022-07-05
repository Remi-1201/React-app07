import styled from "styled-components";
// 7-1 add useLocation
// 7-3 delete useLocation
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

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

  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
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
