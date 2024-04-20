import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import JobPages from "./pages/JobPages";
import JobPage, { jobLoader } from "./pages/JobPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./components/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/jobs" element={<JobPages />} />
  //       <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/services" element={<Services />} />
  //     </Routes>
  //   </>
  // );

  // Add New job
  const addJob = async (newJob) => {
    // console.log(newJob);

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Add Delete job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<JobPages />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
