import { useController, useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

import { FormInput } from '../../molecules/FormInput/FormInput';
import { LoadingButton } from '../../atoms/LoadingButton/LoadingButton';

const StyledForm = styled(Box)({
  width: '300px',
  margin: 'auto',
});

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '100%',
});

const StyledButton = styled(LoadingButton)({
  marginTop: '16px',
});

export type FormData = {
  color: string;
  size: string;
  text: string;
};

type FormProps = {
  isLoading: boolean;
  onSubmit: (data: FormData) => void;
};

export const Form = ({ isLoading, onSubmit }: FormProps) => {
  const { t } = useTranslation();
  const defaultValues: FormData = {
    color: '',
    size: '',
    text: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<FormData>({
    defaultValues,
    mode: 'onBlur',
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset(defaultValues);
    clearErrors();
  };

  const formFields: {
    name: keyof FormData;
    rules: Omit<Parameters<typeof useController>[0]['rules'], 'required'>;
  }[] = [
    {
      name: 'color',
      rules: {
        maxLength: { value: 15, message: t('form.max', { value: 15 }) },
      },
    },
    {
      name: 'size',
      rules: {
        maxLength: { value: 15, message: t('form.max', { value: 15 }) },
        pattern: { value: /^[A-Za-z ]+$/, message: t('form.letters') },
      },
    },
    {
      name: 'text',
      rules: {
        maxLength: { value: 10, message: t('form.max', { value: 10 }) },
      },
    },
  ];
  return (
    <StyledForm component="form" onSubmit={handleSubmit(submitHandler)}>
      <Typography variant="h5" align="center" gutterBottom>
        {t('form.title')}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        paragraph
      >
        {t('form.description')}
      </Typography>
      <StyledContainer>
        {formFields.map(({ name, rules }) => (
          <FormInput
            key={name}
            name={name}
            control={control}
            error={errors[name]}
            labelId={`form.${name}`}
            rules={rules}
          />
        ))}
      </StyledContainer>
      <StyledButton type="submit" loading={isLoading}>
        {t('form.submit')}
      </StyledButton>
    </StyledForm>
  );
};
