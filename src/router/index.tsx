import { createBrowserRouter } from 'react-router-dom';
import Container from '../components/Container';
import Home from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
]);

export default router;
