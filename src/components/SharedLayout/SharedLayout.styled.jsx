import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
export const LinkDivWraper = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkNav = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #6495ed;
  font-weight: 500;

  &.active {
    color: white;
    color: orangered;
  }
`;
export const WardOr = styled.h3`
  font-size: 30px;
`;
