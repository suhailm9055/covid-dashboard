import React, { useEffect } from "react";
import Header from "./Header";
import ContentContainer from "./ContentContainer";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#f6f6f6] ">
      <Header />
      <ContentContainer />
      <div>
        <h5>
          Discclaimer :This  displays test data and does not represent real COVID-19
          statistics. The information shown is for demonstration purposes only.
        </h5>
      </div>
    </div>
  );
};

export default Home;
