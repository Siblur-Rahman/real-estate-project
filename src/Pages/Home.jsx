// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import Banner from "../components/Banner";
import Estates from "../components/Estates";


const Home = () => {
  // const autInfo = useContext(AuthContext)
    return (
        <div>
          <Banner/>
          <Estates/>
        </div>
    );
};

export default Home;