import NavBar from './NavBar.js';
import headshot from './headshot.jpeg'

const background = () =>{
  return (
    <div>
      <NavBar></NavBar>
      <body>
          <img src={headshot} alt="headshot" class="headshot"></img>
          <div class="backgroundtext">
            <h1>
              About Me
            </h1>
              <p>
              I am a student in the class of 2025 at the Columbia University School of Engineering and Applied Science studying 
              Mechanical Engineering with a minor in Applied Mathematics. My current 
              research focuses on finite element modeling of the female reproductive system's 
              biomechanical behaviors to predict preterm births. I am currently working in the&nbsp;
              <a href="https://kristinmyerscolumbia.com/">Myers Soft Tissue Laboratory at Columbia University</a>. 
              I have work experience involving software engineering, product design, 
              CAD modeling, and product testing. I am passionate about the intersection of design and mechanical performance.
              Outside of my academic and professional interests, I enjoy mountain biking, backcountry 
              skiing, surfing, <a href="https://www.liebeskindsurfboards.com">building surfboards</a>, and playing soccer. 
              </p>

              <p>
                Please contact me for my resume. I can be reached via LinkedIn message, email, or phone.
              </p>

              <p> LinkedIn:    
                
                <a href="https://www.linkedin.com/in/bernard-liebeskind">
                &nbsp;www.linkedin.com/in/bernard-liebeskind
                </a>
              </p>

              <p>Mobile Phone: 
                <a href="tel: 310-486-2602">
                &nbsp;+1(310)-486-2602
                </a>
                
              </p>

              <p>
                Email:
                <a href="mailto: bl2905@columbia.edu">&nbsp;bl2905@columbia.edu</a>
              </p>

              <p>
                Google Scholar:
                <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=4&gmla=AJsN-F4533NmupNIiCLnPtv99e32vMZXQO-z8qths37fKnqxUzQAGtztkCI0SI39mrFWKJzaWja2Z5aAFk5VXPzXWM_EqLzHOA&user=6j_1CAIAAAAJ">
                &nbsp;Bernard Liebeskind
                </a>
              </p>
          </div>
      </body>
    </div>
  );
}

export default background;
