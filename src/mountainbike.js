import NavBar from './NavBar.js';
import mtb1 from './Projects/Bike/mtb1.png';
import mtb2 from './Projects/Bike/mtb2.png';
import mtb3 from './Projects/Bike/mtb3.png';

function mountainbike(props){
  return (
    <div>
      <NavBar></NavBar>
      
<div>
  <h2 class="projectheader">Mountain Bike</h2>
  <div class="projectdescription">The goal of this project was to learn how to model complex real-world objects in SolidWorks
      and to practice with large assemblies. I chose to model my own mountain bike and started by measuring
      and documenting the physical object.
      I built this bike from components in the same way that a normal bike would be built. The frame,
      wheels, fork, and suspension are all separate components.
</div>
  <div class="imagecontainer">
      <img class="topimages mtb" src={mtb1} alt="Mountain Bike"></img>
      <img class="topimages mtb" src={mtb2} alt="Mountain Bike"></img>
      <img class="bottomimages" src={mtb3} alt="Mountain Bike"></img>
  </div>
      
</div>
</div>
  );
}

export default mountainbike;
