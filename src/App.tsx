import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from '@mui/material/styles';
import { Generator } from './components/pages/Generator/Generator';
import { Layout } from './components/templates/Layout/Layout.tsx';
import { theme } from './theme/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Generator />
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
