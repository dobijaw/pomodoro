import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const activeClassName = 'active';

const NavLinkItem = styled(NavLink)`
  display: block;
  padding: 5px 10px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.background60};
  }
`;

export default NavLinkItem;
