import NavBar from './NavBar.js';
import rs1 from './Projects/ReSheath/rl1.png'
import rs2 from './Projects/ReSheath/rl2.png'
import rs3 from './Projects/ReSheath/rl3.jpeg'

function reloadsystem(props){
  return (
    <div>
    <NavBar></NavBar>
    <div>
      <h2 class="projectheader">Stent Reload System</h2>
      <div class="projectdescription">The goal of this project was to 
      create a mechanism that could reload a nitinol stent into the delivery 
      system. Because nitinol can only be shaped at a very low temperature, 
      the system was made to work in ice water, and minimize the time with 
      hands exposed to the freezing water. The screw mechanism pushes down 
      on a silicon O ring, causing its inner diameter to constrict, and 
      reshape the nitinol stent. Additionally, water had 
      to be able to flow freely through the device in order to make 
      sure that the stent was cold enough to be reshaped. 
</div>
      <div class="imagecontainer">
          <img class="topimages rs" src={rs1} alt="Stent Reload System"></img>
          <img class="topimages rs" src={rs2} alt="Stent Reload System"></img>
          <img class="bottomimages" src={rs3} alt="Stent Reload System"></img>
      </div>
          
  </div>
  </div>
  );
}

export default reloadsystem;
