

function Project(props){
  return (
    <div>
        <h2 class="projectheader">{props.name}</h2>
        <div class="projectdescription">{props.description}</div>
        <div class="imagecontainer">
            <img class="topimages" src={props.im1} alt={props.name}></img>
            <img class="topimages" src={props.im2} alt={props.name}></img>
            <img class="bottomimages" src={props.im3} alt={props.name}></img>
        </div>
            
    </div>
  );
}

export default Project;
