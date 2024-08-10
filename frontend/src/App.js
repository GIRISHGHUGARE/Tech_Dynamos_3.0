import Login from './screens/Login';
import Layout from './components/Layout';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './screens/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      } 
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;