import React from "react"
import NavBar from "./NavBar"
import HomePageProjects from "./HomePageProjects"

const Main = () =>{
    return(
        <body class="">
            <NavBar />
            <br></br>
            <h2 class="homeheader color">
                Selected Projects
            </h2>
            <br />
            <HomePageProjects />
            
        </body>
    );
};

export default Main