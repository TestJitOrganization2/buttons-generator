import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type LoadingButtonProps = {
  loading: boolean;
  children: React.ReactNode;
  type: 'button' | 'submit';
};

export const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  LoadingButtonProps
>(({ loading, children, type, ...props }, ref) => {
  const { t } = useTranslation();
  return (
    <Button
      type={type}
      variant="contained"
      disabled={loading}
      fullWidth
      ref={ref}
      {...props}
    >
      {loading ? t('loadingButton.loading') : children}
    </Button>
  );
});
