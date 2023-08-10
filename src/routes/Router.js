import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import AllGame from "./pages/AllGame";
import Profile from "./pages/profile";

const Router = createBrowserRouter([
    {
      path: '/',
      element: <AllGame/>,
      errorElement: <ErrorPage/>,
    //   children: [
    //     {
    //       path: 'contacts/:contactId',
    //       element: <Contact/>,
    //     },
    //   ],
    },
    {
        path: 'Profile',
        element: <Profile/>,
        errorElement: <ErrorPage/>,
      //   children: [
      //     {
      //       path: 'contacts/:contactId',
      //       element: <Contact/>,
      //     },
      //   ],
      },
  ]);

  export default Router