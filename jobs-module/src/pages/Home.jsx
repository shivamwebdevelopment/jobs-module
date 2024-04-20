import Cards from "../components/Cards";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import Modules from "../components/Modules";
import Navbar from "../components/Navbar";
import ViewAllJobs from "../components/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <JobListings isHome={true} />
      <ViewAllJobs />
      <Modules />
    </>
  );
};

export default Home;
