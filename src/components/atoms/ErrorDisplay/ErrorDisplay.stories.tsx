import { Meta, StoryObj } from '@storybook/react';

import { ErrorDisplay } from './ErrorDisplay.tsx';
import '../../../i18n/i18n.ts';

const meta = {
  title: 'Atoms/Error',
  component: ErrorDisplay,
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<typeof ErrorDisplay>;

export const Default: Story = {
  args: {
    children: 'Error text',
  },
};
