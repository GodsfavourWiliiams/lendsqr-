import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from './component/navbar/navbar';
import SideBar from './component/sideBar';
import ErrorPage from './pages/error404/error';
import Home from "./pages/home/home";


const AppLayout = () => (
  <>
    <Navbar />
    <SideBar/>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/users",
        element: <h1>Users</h1>,
      },
      {
        path: "",
        element: <h1>uer</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
