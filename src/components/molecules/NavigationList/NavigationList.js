import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 80px 0 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 0;
  margin: 0 20px;
`;

const NavigationList = () => (
  <List>
    <Item />
    <Item />
    <Item />
  </List>
);

export default NavigationList;
