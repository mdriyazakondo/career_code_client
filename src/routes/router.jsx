import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../page/Home/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import JobDetails from "../components/Home/JobDetails/JobDetails";
import PraiviteRoute from "../PraiviteRoute/PraiviteRoute";
import JobApplay from "../components/Home/JobApplay/JobApplay";
import MyApplication from "../page/MyApplication/MyApplication";
import AddJob from "../page/AddJobs/AddJob";
import AllJobs from "../page/AllJobs/AllJobs";
import MyPostedJob from "../page/MyPostedJob/MyPostedJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApplay/:id",
        element: (
          <PraiviteRoute>
            <JobApplay />
          </PraiviteRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PraiviteRoute>
            <MyApplication />
          </PraiviteRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PraiviteRoute>
            <AddJob />
          </PraiviteRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PraiviteRoute>
            <MyPostedJob />
          </PraiviteRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
