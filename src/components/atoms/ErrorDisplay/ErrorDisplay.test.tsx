import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ErrorDisplay } from './ErrorDisplay';

vi.mock('react-i18next', async (importOriginal) => {
  const actual = (await importOriginal()) as object;

  return {
    ...actual,
    useTranslation: () => ({
      t: () => {
        return 'Error';
      },
    }),
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  };
});

describe('ErrorDisplay', () => {
  it('renders the error display and match snapshot', async () => {
    const { asFragment } = render(
      <ErrorDisplay>There was an error</ErrorDisplay>,
    );

    await waitFor(() => {
      const errorText = screen.getByText(/There was an error/i);
      expect(errorText).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
