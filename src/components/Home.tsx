import React, { useEffect } from "react";
import Header from "./Header";

const Home: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-8 bg-[#f6f6f6] ">
      <Header />
      <div>contentContainer</div>
      <div>footer</div>
    </div>
  );
};

export default Home;
