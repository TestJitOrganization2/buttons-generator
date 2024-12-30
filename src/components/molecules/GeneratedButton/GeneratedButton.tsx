import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';

const StyledContainer = styled(Box)({
  marginTop: 4,
});

const StyledButtonContainer = styled(Box)({
  textAlign: 'center',
  padding: 2,
  maxWidth: '100%',
});

type GeneratedButtonProps = {
  generatedCode: string;
};

export const GeneratedButton = ({ generatedCode }: GeneratedButtonProps) => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <Typography variant="h6" align="center" gutterBottom>
        {t('generatedButton.title')}
      </Typography>
      <StyledButtonContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: generatedCode,
          }}
        />
      </StyledButtonContainer>
    </StyledContainer>
  );
};
