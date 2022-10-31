import React, { useContext } from "react";
import DataStore from "../DataStore";
import SearchAppBar from "../Header/SearchAppBar";
import ActionAreaCard from "./Card";

function Main() {

    const { city } = useContext(DataStore);

  return (
    <div>
      <SearchAppBar />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20vh"}}>
      { city ?  <ActionAreaCard /> : "" }
      </div>
    </div>
  );
}

export default Main;
