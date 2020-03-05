import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const activeClassName = 'active';

const NavLinkItem = styled(NavLink).attrs({
  activeClassName,
})`
  display: block;
  padding: 5px 10px;
  margin: 0;
  color: ${({ theme }) => theme.colors.buttons};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.35s;

  &:focus {
    outline: 1;
    outline-color: ${({ theme }) => theme.colors.lines};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.details};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default NavLinkItem;
