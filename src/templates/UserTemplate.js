import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';

const UserWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const UserTemplate = ({ children, handleModalButtonClick }) => (
  <>
    <Navbar handleModalButtonClick={handleModalButtonClick} />
    <UserWrapper>{children}</UserWrapper>
  </>
);

export default UserTemplate;
