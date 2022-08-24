import NavBar from './NavBar.js';
import hs1 from './Projects/Hemostasis Valve/hs1.png'
import hs2 from './Projects/Hemostasis Valve/hs2.png'
import hs3 from './Projects/Hemostasis Valve/hs3.png'
import hs4 from './Projects/Hemostasis Valve/hs4.jpeg'

function hemostasisvalve(props){
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <h2 class="projectheader">Hands-Free Hemostasis Valve</h2>
        <div class="projectdescription">This hemostasis valve was 
        made to accept a stent delivery system. When the system 
        is introduced to the valve, it would push apart on the spring-
        loaded wedges and open up the lumen of the valve. This would
        allow for the valve to be operated by simply inserting the 
        stent delivery system without using a screw or button
        like current competitors require.
</div>
        <div class="imagecontainer">
            <img class="topimages hs1" src={hs1} alt="Hands-Free Hemostasis Valve"></img>
            <img class="topimages hs1" src={hs2} alt="Hands-Free Hemostasis Valve"></img>
            <img class="bottomimages hs3" src={hs3} alt="Hands-Free Hemostasis Valve"></img>
            <img class="bottomimages hs4" src={hs4} alt="Hands-Free Hemostasis Valve"></img>
        </div>
            
    </div>

    </div>
  );
}

export default hemostasisvalve;
