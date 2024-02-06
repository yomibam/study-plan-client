import React from "react";
import NavBar from "../components/NavBar";
import HomeHero from "../components/HomeHero";
import SearchCourse from "../components/SearchCourse";
import HomeReviews from "../components/HomeReviews";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <SearchCourse />
      <HomeReviews />
      <Footer />
    </>
  );
}

export default Home;
