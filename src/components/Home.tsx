import React, { useEffect } from "react";
import Header from "./Header";
import ContentContainer from "./ContentContainer";

const Home: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-8 bg-[#f6f6f6] ">
      <Header />
      <ContentContainer/>
      <div>footer</div>
    </div>
  );
};

export default Home;
