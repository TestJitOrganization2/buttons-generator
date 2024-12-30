import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const StyledNavbar = styled(Box)<{ height: string }>(({ theme, height }) => ({
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'start',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  height: `calc(${height} - ${theme.spacing(2)} - ${theme.spacing(2)})`,
}));

type NavbarProps = {
  height: string;
};

export const Navbar = ({ height }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <StyledNavbar height={height}>
      <Typography variant="h6">{t('appTitle')}</Typography>
    </StyledNavbar>
  );
};
