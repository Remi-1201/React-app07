// 7-4 add {memo}
import React, { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import styled from "styled-components";
import { Input } from "../atoms/input/Input";

// 7-4 User.jsxでsetUserInfoが再レンダリングされる時、SearchInputも再レンダリングされる必要がないので、memo()で囲む。
export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="Type somethings ..." />
      <SButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
