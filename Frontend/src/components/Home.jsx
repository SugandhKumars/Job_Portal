import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobsOpening from "./LatestJobsOpening";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";

function Home() {
  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobsOpening />
      <Footer />
    </div>
  );
}

export default Home;
