import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './routes/router';

export default function App() {
  return <RouterProvider router={AppRouter} />;
}
