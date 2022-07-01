import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  // 7-1 add {isAdmin} as props
  const { user, isAdmin } = props;
  return (
    <Card>
      {/* 7-1 add {isAdmin}  */}
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDL>
        <dt>Mail</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Website</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 64px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
