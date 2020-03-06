import React from 'react';
import Navbar from 'components/organisms/Navbar/Navbar';

const UserTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default UserTemplate;
