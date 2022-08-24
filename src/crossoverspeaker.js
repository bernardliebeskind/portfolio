import NavBar from './NavBar.js';
import crossover1 from './Projects/Crossover Speaker/crossover1.jpeg';
import crossover2 from './Projects/Crossover Speaker/crossover2.jpeg';
import crossover3 from './Projects/Crossover Speaker/crossover3.png';


function crossoverspeaker(props){
  return (

<div>
<NavBar></NavBar>
<div>
  <h2 class="projectheader">Crossover Speaker Design</h2>
  <div class="projectdescription">This was the final project for my introductory electrical engineering course, ELEN1202.
      I worked in a team with two other students.
      Our circuit takes a full spectrum audio input from a 3.5mm jack and 
      amplifies the signal with a pre-amplifier and powered amplifier. We incorporated a 
      potentiometer for volume control. The amplified signal is then fed into an inductor and 
      capacitor. The capacitor acts as a high pass filter and the inductor acts as a low pass filter. 
      The high frequency is sent to the tweeter and the low frequency is sent to the woofer. We
      calculated the crossover frequency, and output gain using the components we already had in the 
      EE lab.
      The motivation to segment the different frequencies is that different speakers handle different output frequencies
      better than others resulting in a better listening experience. 
</div>
  <div class="imagecontainer">
      <img class="topimages" src={crossover1} alt="Crossover Speaker"></img>
      <img class="topimages" src={crossover2} alt="Crossover Speaker"></img>
      <img class="bottomimages" src={crossover3} alt="Crossover Speaker"></img>
  </div>
      
</div>

</div>
  );
}

export default crossoverspeaker;
