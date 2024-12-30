import React from 'react';
import { Box, Typography, Alert, AlertTitle } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

export const StyledContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledAlert = styled(Alert)({
  maxWidth: '600px',
  width: '100%',
});

type ErrorDisplayProps = {
  children: React.ReactNode;
};

export const ErrorDisplay = ({ children }: ErrorDisplayProps) => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledAlert severity="error">
        <AlertTitle>{t('errorDisplay.title')}</AlertTitle>
        <Typography variant="body2">{children}</Typography>
      </StyledAlert>
    </StyledContainer>
  );
};
