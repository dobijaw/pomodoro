import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const activeClassName = 'active';

const NavLinkItem = styled(NavLink)`
  display: block;
  padding: 5px 10px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.08em;
  line-height: 2;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;

  @media (min-width: 420px) and (min-height: 600px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.background60};
  }
`;

export default NavLinkItem;
