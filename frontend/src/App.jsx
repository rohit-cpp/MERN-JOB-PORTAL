import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/Jobs.jsx";
import PostJobs from "./components/admin/PostJobs";
import Applicants from "./components/admin/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import RoadMap from "./components/RoadMap";
import AiHelp from "./components/AiHelp";
import FeedbackForm from "./components/admin/feedbackForm";
import AdminFeedbackTable from "./components/admin/AdminFeedbackTable";
const appRouter = createBrowserRouter([
  // student starts form here
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/description/:id", element: <JobDescription /> },
  { path: "/browse", element: <Browse /> },
  { path: "/profile", element: <Profile /> },
  { path: "/roadmap", element: <RoadMap /> },
  { path: "/help", element: <AiHelp /> },

  // admin  starts form here
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        {" "}
        <Companies />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJobs />,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Applicants />,
  },
  {
    path: "/feedback",
    element: <FeedbackForm />,
  },
  {
    path: "/admin/rohit",
    element: <AdminFeedbackTable />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
