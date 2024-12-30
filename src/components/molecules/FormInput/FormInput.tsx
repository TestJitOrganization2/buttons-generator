import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TextInput } from '../../atoms/TextInput/TextInput.tsx';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  error: FieldError | undefined;
  labelId: string;
  rules?: Omit<Parameters<typeof useController>[0]['rules'], 'required'>;
};

export const FormInput = <T extends FieldValues>({
  name,
  control,
  error,
  labelId,
  rules,
}: FormInputProps<T>) => {
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: { value: true, message: t('form.required') },
        minLength: { value: 1, message: t('form.min', { value: 1 }) },
        ...rules,
      }}
      render={({ field }) => (
        <TextInput
          {...field}
          labelId={labelId}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
