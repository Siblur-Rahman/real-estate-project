// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Estates from "../components/Estates";


const Home = () => {
  // const autInfo = useContext(AuthContext)
    return (
      <div>
          <Helmet>
          <title>Home Page</title>
          </Helmet>
          <Banner/>
          <Estates/>
        </div>
    );
};

export default Home;