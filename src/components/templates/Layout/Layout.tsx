import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

import { Navbar } from '../Navbar/Navbar.tsx';

type WrapperProps = {
  children: React.JSX.Element;
};

const StyledLayout = styled(Box)<{ height: string }>(({ theme, height }) => ({
  minWidth: '50%',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  minHeight: `calc(100vh - ${height})`,
  marginTop: height,
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Layout = ({ children }: WrapperProps) => {
  const theme = useTheme();

  const navbarHeight = theme.navbar.height;
  return (
    <StyledLayout height={navbarHeight}>
      <Navbar height={navbarHeight} />
      <StyledContainer>{children}</StyledContainer>
    </StyledLayout>
  );
};
