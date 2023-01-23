import React, { useEffect } from "react";
import HomeComponent from "../../components/home";
import { getBlogData } from "../../pages/api/blog";

const HomeContainer = () => {
  const blogData = async () => {
    const res = await getBlogData();
    
  };

  useEffect(() => {
    blogData();
  }, []);

  return (
    <>
      <HomeComponent />
    </>
  );
};

export default HomeContainer;
