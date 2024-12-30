import React from 'react';
import { Typography, TypographyVariant } from '@mui/material';
import { useTranslation } from 'react-i18next';

type LabelProps = {
  variant?: TypographyVariant | 'none';
  children?: React.ReactNode;
  textId?: string;
} & (
  | { children: React.ReactNode; textId?: never }
  | { textId: string; children?: never }
);

export const Label = ({ children, textId, variant = 'none' }: LabelProps) => {
  const { t } = useTranslation();
  const v = variant === 'none' ? undefined : variant;
  if (textId) {
    return <Typography variant={v}>{t(textId)}</Typography>;
  }

  return <Typography variant={v}>{children}</Typography>;
};
