import NavBar from './NavBar.js';


const publications = () =>{
  return (
    <div>
      <NavBar></NavBar>
     <body class="CustomNavBar">
        <h2 class = "Header">
          Publications
        </h2>
        <div>
          <ul class="list">
          <br></br>
            <li>First Author: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/jcu.22846">Bifid Iliopsoas Tendon as a Cause for Internal Snapping Hip Syndrome: A case report, Journal of Clinical Ultrasound</a></li>
            <br></br>
            <li>Contributing Author: <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6j_1CAIAAAAJ&citation_for_view=6j_1CAIAAAAJ:9yKSN-GCB0IC">Rotational Shoulder Strength Profiles In North And Latin American Professional Baseball Pitchers And Position Players: 441</a></li>
            <br></br>
            <li>Contributing Author: <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=6j_1CAIAAAAJ&citation_for_view=6j_1CAIAAAAJ:d1gkVwhDpl0C">Professional Baseball Player Type and Geographic Region of Origin Impacts Shoulder External and Internal Rotation Strength, The Sports Physical Therapy Section of the American Physical Therapy Association</a></li>
            <br></br>
            <li>Contributing Author: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8329309/">Professional Baseball Player Type and Geographic Region of Origin Impacts Shoulder External and Internal Rotation Strength</a></li>
          </ul>
        </div>
     </body>
    </div>
  );
}

export default publications;
