import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';

const UserWrapper = styled.div`
  max-width: 1024px;
  margin: 10px auto 0;
  padding: 0 20px;
`;

const UserTemplate = ({ children }) => (
  <>
    <Navbar />
    <UserWrapper>{children}</UserWrapper>
  </>
);

export default UserTemplate;
