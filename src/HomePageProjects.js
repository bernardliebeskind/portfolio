import React from "react";
import crossover2 from './Projects/Crossover Speaker/crossover2.jpeg';
import mtb1 from './Projects/Bike/mtb1.png';
import rl1 from './Projects/ReSheath/rl1.png';
import hs1 from './Projects/Hemostasis Valve/hs1.png';
import vs1 from './Projects/venous sheath/vs1.png';

function HomePageProjects() {
  return (
    <div>
    <div class="flex-container">

        <a class="container" href="/hemostasis-valve">
            <img src={hs1} alt="" class="image maintop1"></img>
            <div class="middle">
                <div class="text">Hemostasis Valve</div>
            </div>
        </a>
        

        <a class="container" href="/mountain-bike">
            <img src={mtb1} alt="" class="image maintop2"></img>
            <div class="middle">
                <div class="text">Mountain Bike</div>
            </div>
        </a>
        
    </div>
    <br></br>
    <div class="flex-container">
         
        <a class="container" href="/venous-sheath-valve">
            <img src={vs1} alt="" class="image mainbottom" ></img>
            <div class="middle">
                <div class="text" >Venous Sheath Valve</div>
            </div>
        </a>
        
        <a class="container" href="/reload-system">
            <img src={rl1} alt="" class="image mainbottom"></img>
            <div class="middle">
                <div class="text">Stent Reload System</div>
            </div>
        </a>

        <a class="container" href="/crossover-speaker">
            <img src={crossover2} alt="" class="image mainbottom"></img>
            <div class="middle">
                <div class="text">Crossover Speaker</div>
            </div>
        </a>
        
        
    </div>
    </div>

    
  );
}

export default HomePageProjects;