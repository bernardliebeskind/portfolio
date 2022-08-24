import NavBar from './NavBar.js';
import vs1 from './Projects/venous sheath/vs1.png';
import vs2 from './Projects/venous sheath/vs2.png';
import vs3 from './Projects/venous sheath/vs3.jpeg';

function venoussheathvalve(props){
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h2 class="projectheader">Venous Sheath Valve</h2>
        <div class="projectdescription">The goal of this project was to create a valve that 
        would accept both the catheter dilator system and a silicon slit valve. 
        The slit valve is housed between the two components, which were glued together.
        The system 
        would maintain hemostasis while accepting the dilator. Additionally, I was constrained 
        to the engineering drawings provided by the manufacturers of the slit valve.  
</div>
        <div class="imagecontainer">
            <img class="topimages vsv" src={vs1} alt="Venous Sheath Valve"></img>
            <img class="topimages vsv" src={vs2} alt="Venous Sheath Valve"></img>
            <img class="bottomimages" src={vs3} alt="Venous Sheath Valve"></img>
        </div>
            
    </div>
    </div>
  );
}

export default venoussheathvalve;
