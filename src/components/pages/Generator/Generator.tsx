import DOMPurify from 'dompurify';
import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';

import { Form } from '../../organisms/Form/Form';
import { useMutation } from '@tanstack/react-query';
import { submitForm } from '../../../api/form.ts';
import { Output } from '../../organisms/Output/Output.tsx';

export const StyledWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
});

export const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  width: '100%',
});

export const StyledClearButton = styled(Button)({
  marginTop: '16px',
  alignSelf: 'center',
});

export const Generator = () => {
  const { reset, mutate, isPending, error, data } = useMutation({
    mutationFn: submitForm,
  });

  const sanitizedHtml = DOMPurify.sanitize(data || '');
  return (
    <StyledWrapper>
      <StyledContainer>
        <Form isLoading={isPending} onSubmit={mutate} />
        <Output generated={sanitizedHtml} isLoading={isPending} error={error} />
      </StyledContainer>
      {sanitizedHtml && (
        <StyledClearButton onClick={reset}>Clear</StyledClearButton>
      )}
    </StyledWrapper>
  );
};
