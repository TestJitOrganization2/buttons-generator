import { GeneratedButton } from '../../molecules/GeneratedButton/GeneratedButton.tsx';
import { GeneratedCode } from '../../molecules/GeneratedCode/GeneratedCode.tsx';
import { Loader } from '../../atoms/Loader/Loader.tsx';
import { ErrorDisplay } from '../../atoms/ErrorDisplay/ErrorDisplay.tsx';

type OutputProps = {
  generated?: string;
  isLoading: boolean;
  error: Error | null;
};

export const Output = ({ generated, isLoading, error }: OutputProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorDisplay>{error.message}</ErrorDisplay>;
  }

  if (!generated) {
    return null;
  }

  return (
    <>
      <GeneratedButton generatedCode={generated} />
      <GeneratedCode generatedCode={generated} />
    </>
  );
};
