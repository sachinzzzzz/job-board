import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/ui/auth/Login";
import Signup from "./components/ui/auth/Signup";
import Home from "./components/ui/Home";
import Jobs from "./components/Jobs";
import PostJob from "./components/admin/PostJob";
import AboutUs from "./components/AboutUs";
import AdminJobs from "./components/admin/AdminJobs";


const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/about',
    element:<AboutUs/>
  },
  // admin logic
  {
    path:'/admin/jobs/',
    element:<AdminJobs/>
  },
  {
    path:'/admin/jobs/create',
    element:<PostJob/>
  }


]
)

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
