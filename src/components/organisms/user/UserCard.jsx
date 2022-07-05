import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import React, { memo } from "react";

// 7-4 User.jsxでsetUserInfoが再レンダリングされる時、UserCardも再レンダリングされる必要がないので、memo()で囲む。
export const UserCard = memo((props) => {
  // 7-1 add {isAdmin} as props
  const { user } = props;
  return (
    <Card>
      {/* 7-1 add {isAdmin}
                7-3 delete {isAdmin} */}
      <UserIconWithName image={user.image} name={user.name} />
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
});

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
