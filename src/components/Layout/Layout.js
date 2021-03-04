import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="React. HomeWork-2.2. PhoneBook." />
    <Container>{children}</Container>
  </>
);

export default Layout;
