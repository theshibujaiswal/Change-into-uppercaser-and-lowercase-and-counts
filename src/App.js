import Header from "./AllComponent/Header";
import SubComponent from "./AllComponent/SubComponent";
import Banner from "./AllComponent/State.js";
import State from "./AllComponent/State.js";

import FunctionalComponent from "./AllComponent/FunctionComponent";
import ClassComponent from "./AllComponent/ClassComponent";
import React ,{ useState } from "react";
import UpperCase from "./AllComponent/UpperCase";

function App() {
    

  return (
    <div>
      {/* <Header />
      <State /> */}

      {/* <FunctionalComponent Name={"shibu"} Email={"theshibujaiswal@gmail..com"} />
      <ClassComponent name={"anand"} /> */}
     
      <UpperCase/>
       
     
    </div>
  );
}
export default App;
