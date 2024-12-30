import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';

const StyledCodeContainer = styled(Box)({
  textAlign: 'center',
  padding: 2,
  maxWidth: '100%',
});

type GeneratedCodeProps = {
  generatedCode: string;
};

export const GeneratedCode = ({ generatedCode }: GeneratedCodeProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>
        {t('generatedCode.title')}
      </Typography>
      <StyledCodeContainer>
        <code>{generatedCode}</code>
      </StyledCodeContainer>
    </Box>
  );
};
