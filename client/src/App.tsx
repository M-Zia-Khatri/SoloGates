import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter} />
    </QueryClientProvider>
  );
}
